import { createSlice } from "@reduxjs/toolkit";
import UsePut from './hooks/putHook';
import UsePost from './hooks/postHook';
import { initUserId } from "./userSlice";

const http = ' http://localhost:3000' || process.env.API_URL;

export let initEvent = {
    userId: initUserId,
    diners: 100,
    date: 0,
    houer: 0,
    design: "Black",
    type: "Pareve"
}

const eventSlice = createSlice({
    name: "event",
    initialState: initEvent,
    reducers: {
        AddEvent: (state, actions) => {
            console.log(actions.payload, "i am event");
            const Post = UsePost();
            Post(`${http}/event`, actions.payload)
        },
        Edit: (state, actions) => {
            const Put = UsePut();
            Put(`${http}/event`, actions.payload);
        },
        SaveEvent: (state, action) => {
            initEvent = { ...action.payload }
        }
    }
});

export const { AddEvent, Edit, SaveEvent } = eventSlice.actions;
export const selectEvents = state => state.eventSlice.events;
export default eventSlice.reducer;