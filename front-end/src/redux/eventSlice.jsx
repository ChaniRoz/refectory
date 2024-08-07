import { createSlice } from "@reduxjs/toolkit";
import UsePut from './hooks/putHook';
import UsePost from './hooks/postHook';
import { initUserId } from "./userSlice";

const http = ' http://localhost:3000' || process.env.API_URL;

export let initEvent = {
    userId: initUserId,
    type: "Pareve",
    date: "00:00",
    diners: 100,
    hour: 0,
    design: "Black",
    isComplete: false,
    items: []
}

const eventSlice = createSlice({
    name: "event",
    initialState: initEvent,
    reducers: {
        AddEvent: (state, actions) => {
            console.log(actions.payload, "i am event");
            const Post = UsePost();
            const data = {
                ...initEvent,
                ...actions.payload
            }
            Post(`${http}/event`, data)
        },
        Edit: (state, actions) => {
            const Put = UsePut();
            Put(`${http}/event`, actions.payload);
        },
        SaveEvent: (state, actions) => {
            initEvent = {
                ...initEvent,
                ...actions.payload
            }
        }
    }
});

export const { AddEvent, Edit, SaveEvent } = eventSlice.actions;
export const selectEvents = state => state.eventSlice.events;
export default eventSlice.reducer;