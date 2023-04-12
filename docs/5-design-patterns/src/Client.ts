import { ShipmentDecorator } from "./shipmentDecorator";

export class Client {
    constructor(shipment_data: {
      ShipmentID: number;
      Weight: number;
      FromAddress: string;
      FromZipCode: string;
      ToAddress: string;
      ToZipCode: string;
      additionalShipmentInfo: string[];
    }, frontend: {
      getShipmentID: () => number
    }) {
      const shipment = new ShipmentDecorator(
        frontend,
        shipment_data.ShipmentID,
        shipment_data.Weight,
        shipment_data.FromAddress,
        shipment_data.FromZipCode,
        shipment_data.ToAddress,
        shipment_data.ToZipCode,
        shipment_data.additionalShipmentInfo
      );
      const result = shipment.ship();
      console.log(result);
    }
  }
  