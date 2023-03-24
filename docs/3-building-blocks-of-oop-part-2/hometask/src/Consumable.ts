export class Consumable {


    readonly name: string;
    public value: number;
    public weight: number;
    public isConsumed: boolean;
    readonly isSpoiledProp: boolean;

    constructor(name:string, value: number, weight: number, isSpoiledProp: boolean, isConsumed=false) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.isSpoiledProp = isSpoiledProp;  
        this.isConsumed = isConsumed;
    }

    isSpoiled(){
      return this.isSpoiledProp;
    }

    use () {
        if(this.isConsumed){
            return `There's nothing left of the ${this.name} to consume.`;
        }
        else if(this.isSpoiledProp){
            return `You consumed the ${this.name}.\nYou feel sick.`;
        }
        else {
            return `You consumed ${this.name === 'pizza'? 'a slice of ':''}the ${this.name}.`
        }
        
    }
}