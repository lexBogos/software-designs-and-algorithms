import { Item } from './Item'
import { ItemComparator } from './ItemComparator'

export class Inventory {

  constructor( 
    public items: Item[] 
  ) 
  { 
    this.items = items??[]; 
  }

  addItem(item:Item): void {
   this.items.push(item);
  }

  sort(comparator?: ItemComparator){
    comparator?this.items.sort(comparator.compare):this.items.sort((a,b)=>a.value - b.value);
  }

  toString(){
    return this.items.join(', ')
  }
}
