import { createSlice } from "@reduxjs/toolkit";
import UsePut from './hooks/putHook';
import UsePost from './hooks/postHook';

const http = ' http://localhost:3000' || process.env.API_URL;

export let init = {
    diners: 100,
    date: 0,
    houer: 0,
    design: "Black",
    type: "Pareve"
}

const eventSlice = createSlice({
    name: "event",
    initialState: init,
    reducers: {
        Add: (state, actions) => {
            console.log(actions.payload,"i am event");
            const Post = UsePost();
            Post(`${http}/event`, actions.payload)
        },
        Edit: (state, actions) => {
            const Put = UsePut();
            Put(`${http}/event`, actions.payload);
        },
        Save: (state, action) => {
                init = {...action.payload}          
        }
    }
});

export const { Add, Edit, Save } = eventSlice.actions;
export const selectEvents = state => state.eventSlice.events;
export default eventSlice.reducer;