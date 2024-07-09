import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';

const http =' http://localhost:3000'|| process.env.API_URL ;
console.log("----------------itemSlice-------------------------");

const itemSlice = createSlice({
    name: "item",
    initialState: {},
    reducers: {

        Add: (state, actions) => {
            console.log(actions.payload,"?????????????");
            const Post = UsePost();
            Post(`${http}/item`, actions.payload)
        },
    }
});

export const  {Add}  = itemSlice.actions;

export const selectitems = state => state.itemSlice.item;
export default itemSlice.reducer;
