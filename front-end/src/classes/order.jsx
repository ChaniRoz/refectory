import orderItem from "./orderItem";

export default class Order {
    orderId=Number;
    isComplete=Boolean;
    userId=Number;
    items=[orderItem];
    constructor() { }
}