import { Shipment } from "./Shipment";

interface Frontend {
    getShipmentID(): number;
}

export class ShipmentDecorator {

    private shipmentId: number;
    private weight: number;
    private fromAddress: string;
    private fromZipCode: string;
    private toAddress: string;
    private toZipCode: string;
    private parcelPrices: number[];
    private shipment: Shipment;
    private additionalShipmentInfo: string[];

    constructor(
        frontend: Frontend|undefined,
        shipmentId: number,
        weight: number,
        fromAddress: string,
        fromZipCode: string,
        toAddress: string,
        toZipCode: string,
        additionalShipmentInfo: string[],
    ){
       this.additionalShipmentInfo = additionalShipmentInfo;
       this.shipment = new Shipment(frontend, shipmentId, weight, fromAddress, fromZipCode, toAddress, toZipCode)
    }

    
    ship(){
        return this.shipment.ship() + this.additionalShipmentInfo.join('\n')
    }

    getShipmentID(){
        return this.shipment.getShipmentID()
    }


    public getInstance(): this {
        return this;
    }

} 