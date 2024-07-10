import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';
import UseGet from './hooks/postHook';

const http =' http://localhost:3000'|| process.env.API_URL ;

const itemSlice = createSlice({
    name: "item",
    initialState: {},
    reducers: {
        // Get: (state) => {
        //     const [get, data] = UseGet();
        //     get(`${http}/item`);
        //     state.Post = data;
        // },
        // GetItemsByTypeAndEvent: (state,actions) => {
        //     const [get, data] = UseGet();
        //     get(`${http}/item`, actions.payload);
        //     state.Post = data;
        // },
        Add: (state, actions) => {
            console.log(actions.payload);
            const Post = UsePost();
            Post(`${http}/item`, actions.payload)
        },
    }
});

export const { Add ,Get,GetItemsByTypeAndEvent} = itemSlice.actions;
export const selectitems = state => state.itemSlice.items;
export default itemSlice.reducer;