import { EventType } from "./enum/eventType.enum";

export default class Item {
   itemId=Number;
   name=String;
   eventType=EventType;
   price=Number;


    constructor() { }
}