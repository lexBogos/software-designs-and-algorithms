import { AirEastShipper } from "./shipperVendors/AirEast";
import { ChicagoSprintShipper } from "./shipperVendors/ChicagoSprint";
import { PacificParcelShipper } from "./shipperVendors/PacificParcel";

interface ShipperVendor {
    getCost(): number;
}


export class Shipper {
    private shipperVendor: ShipperVendor;
    private zipCode: string|undefined;
    private weight: number;
    private parcelPrices: number[];

    constructor(zipCode: string|undefined, weight:number, parcelPrices: number[]) {
        this.zipCode = zipCode;
        this.weight = weight;
        this.parcelPrices = parcelPrices
    }

    public setShipper() {
        if(!this.zipCode){
            return new AirEastShipper(this.weight, this.parcelPrices)
        }
        if(this.zipCode&&(this.zipCode[0]==='1'||this.zipCode[0]==='2'||this.zipCode[0]==='3')){
            return new AirEastShipper(this.weight, this.parcelPrices)
        }
        else if(this.zipCode&&(this.zipCode[0]==='4'||this.zipCode[0]==='5'||this.zipCode[0]==='6')){
            return new ChicagoSprintShipper(this.weight, this.parcelPrices)
        }
        else {
            return new PacificParcelShipper(this.weight, this.parcelPrices)
        }
    }

    getCost(){
        return this.shipperVendor.getCost();
    }

    getInstance(){
        return this;
    }
}
  