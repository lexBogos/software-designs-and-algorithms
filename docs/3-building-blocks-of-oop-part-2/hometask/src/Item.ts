import { Comparable } from './Comparable';

export class Item implements Comparable<Item> {

    static idCounter = 1;

    readonly id: number;
    readonly name: string;
    public value: number;
    public weight: number;

    constructor(name:string, value:number, weight:number) {
        this.id = Item.idCounter++;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    compareTo(other: Item):number {
        if (this.value > other.value) {
          return 1;
        } else if (this.value < other.value) {
          return -1;
        } else {
          const nameA = this.name.toLowerCase();
          const nameB = other.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        }
    }

    static resetIdCounter() {
      Item.idCounter = 1
    }

    getId () {
     return this.id
    }


    toString() {
        return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
    }
}