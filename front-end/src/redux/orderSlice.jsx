import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';
import { initUserId } from "./userSlice";

const http = ' http://localhost:3000' || process.env.API_URL;

export let initOrder = {
    isComplete: false,
    userId: initUserId,
    items: []
}

const orderSlice = createSlice({
    name: "order",
    initialState: initOrder,
    reducers: {
        AddOrder: (state, actions) => {
            console.log(actions.payload);
            initOrder={...actions.payload};
            const Post = UsePost();
            Post(`${http}/order`,actions.payload)
        },
    }
});

export const { AddOrder } = orderSlice.actions;
export const selectorder = state => state.orderSlice.order;
export default orderSlice.reducer;