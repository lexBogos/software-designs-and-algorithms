import { Shipper } from "./Shipper";
import { Letter } from "./shipmentTypes/Letter";
import { Oversie } from "./shipmentTypes/Oversie";
import { Package } from "./shipmentTypes/Package";

interface Frontend {
    getShipmentID(): number;
}

export class Shipment {

    private shipmentId: number;
    private weight: number;
    private fromAddress: string;
    private fromZipCode: string;
    private toAddress: string;
    private toZipCode: string;
    private shipper: Shipper;
    private parcelPrices: number[];

    constructor(
        frontend: Frontend|undefined,
        shipmentId: number,
        weight: number,
        fromAddress: string,
        fromZipCode: string,
        toAddress: string,
        toZipCode: string,
    ){
        this.shipmentId = shipmentId !== 0 ? shipmentId : frontend ? frontend.getShipmentID():shipmentId++;
        this.weight = weight;
        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
        this.parcelPrices = (() => {
         const letterPrices =  new Letter().prices;
         const packagePrices = new Package().prices;
         const oversiePrices = new Oversie().prices;
         return weight <= 15
         ? letterPrices.map(e => e*weight) : weight <=160 
         ? packagePrices.map(e => e*weight) : packagePrices.map(e => e*weight).map((e,i) => {
            if(i==2){
                return e+oversiePrices[2]*weight
            }
            else{
                return e+oversiePrices[i]
            }
        })
        })()
        this.shipper = new Shipper(fromZipCode, weight, this.parcelPrices)  
    }

    public ship(): string {
        const cost = (this.weight * this.shipper.getCost()).toFixed(2);
        return `Shipment ID: ${this.shipmentId}\nFrom: ${this.fromAddress}, ${this.fromZipCode}\nTo: ${this.toAddress}, ${this.toZipCode}\nCost: $${cost}`;
    }

    public getShipmentID(): number {
        return this.shipmentId;
    }

    public getInstance(): this {
        return this;
    }

} 