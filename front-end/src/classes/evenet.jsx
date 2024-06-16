import { EventDesign } from "./enum/eventDesign.enum";
import { EventType } from "./enum/eventType.enum";

export default class Event {
    userName=String;
    type=EventType;
    orderId=Number;
    date=Date;
    amount=Number;
    design=EventDesign;
    paymentId=Number;


    constructor() { }
}