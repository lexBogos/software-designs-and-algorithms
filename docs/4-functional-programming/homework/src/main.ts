import { Either, fromPromise, ap, right, left, getOrElse, flatten } from './fp/either';
import { pipe } from './fp/utils';
import { fetchClient, fetchExecutor } from './fetching';
import { ClientUser, ExecutorUser } from './types';

type Response<R> = Promise<Either<string, R>>

const getExecutor = (): Response<ExecutorUser> => fromPromise(fetchExecutor());
const getClients = (): Response<Array<ClientUser>> => fromPromise(fetchClient()
  .then(clients => clients
    .map(client => ({...client, demands: client.demands?{_tag: 'Some', value: client.demands}:{_tag: 'None'}}))
));

export enum SortBy {
  distance = 'distance',
  reward = 'reward',
}

export const show = (sortBy: SortBy) => (clients: Array<any>) => (executor: ExecutorUser): any => {
  return executor.possibilities.length ?
  right(clients
  .filter(client => Array.isArray(client.demands.value) && executor.possibilities.some(possibility => client.demands.value.includes(possibility))||!client.demands.value)
  .map(
    client => {
      return  ({name:client.name, distance: Math.sqrt(Math.pow(executor.position.x - client.position.x, 2) + Math.pow(executor.position.y - client.position.y, 2)).toFixed(3), reward: client.reward})}
  )
  .sort((a,b)=>{return sortBy === SortBy.distance ? Number(a.distance) - Number(b.distance) : b.reward - a.reward})
  .reduce((acc, e, i, arr) => {
    if(acc.length === 0){
      acc+=`${arr.length===clients.length?
        'This executor meets all demands of all clients!':
        `This executor meets the demands of only ${arr.length} out of ${clients.length} clients`}\n\nAvailable clients sorted by ${sortBy === SortBy.reward ?
           `highest ${sortBy}` : `distance to executor`}:\n`
    }
    acc+= `name: ${e.name}, distance: ${e.distance}, reward: ${e.reward}${i<arr.length-1?'\n':''}`;
    return acc;
  }, '')):left('This executor cannot meet the demands of any client!')
};

export const main = (sortBy: SortBy): Promise<string> => (
  Promise
    .all([getClients(), getExecutor()]) // Fetch clients and executor
    .then(([clients, executor]) => (
      pipe(
        /**
         * Since the "show" function takes two parameters, the value of which is inside Either
         * clients is Either<string, Array<Client>>, an executor is Either<string, Executor>. How to pass only Array<Client> and Executor to the show?
         * Either is an applicative type class, which means that we can apply each parameter by one
         */
        right(show(sortBy)), // Firstly, we need to lift our function to the Either
        ap(clients), // Apply first parameter
        ap(executor), // Apply second parameter
        flatten, // show at the end returns Either as well, so the result would be Either<string, Either<string, string>>. We need to flatten the result
        getOrElse((err) => err) // In case of any left (error) value, it would be stopped and show error. So, if clients or executor is left, the show would not be called, but onLeft in getOrElse would be called
      )
    ))
);
