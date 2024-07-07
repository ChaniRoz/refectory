import { EventDesign } from "./enum/eventDesign";
import { EventType } from "./enum/eventType";

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