export class PacificParcelShipper {

    private weight: number;
    private parcelPrices: number[];

    constructor(weight:number, parcelPrices:number[]) {
        this.weight = weight;
        this.parcelPrices = parcelPrices;
    }

    public getCost(){
        this.weight * this.parcelPrices[2]
    }
}