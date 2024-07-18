import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';

const http = ' http://localhost:3000' || process.env.API_URL;

const orderSlice = createSlice({
    name: "order",
    initialState: {},
    reducers: {
        // Get: (state) => {
        //     const [get, data] = UseGet();
        //     get(`${http}/order`);
        //     state.Post = data;
        // },
        Add: (state, actions) => {
            console.log(actions.payload);
            const Post = UsePost();
            Post(`${http}/order`, actions.payload)
        },
    }
});

export const { Add } = orderSlice.actions;
export const selectorder = state => state.orderSlice.order;
export default orderSlice.reducer;