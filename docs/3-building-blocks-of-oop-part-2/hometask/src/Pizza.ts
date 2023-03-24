import { Consumable } from './Consumable';

export class Pizza extends Consumable {

    public numberOfSlices: number;
    public numberOfEatenSlices: number;

    constructor(value:number, weigh: number, numberOfSlices: number, isSpoiled: boolean ) {
        super('pizza', value, weigh, isSpoiled, numberOfSlices===0)
        this.value = value;
        this.numberOfSlices = numberOfSlices;
        this.numberOfEatenSlices = 0;
    }

    use(){
        if(this.numberOfSlices === 0 || this.numberOfEatenSlices === this.numberOfSlices ){
            this.isConsumed = true;
        }
        else if(this.numberOfSlices > 0){
            this.numberOfEatenSlices++;
        }
        return super.use();
    }

    getNumberOfEatenSlices(){
        return this.numberOfEatenSlices;
    }
}