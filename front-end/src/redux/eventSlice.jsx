// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
// import UseGet from '../../Hooks/GetHook'
// import UseDelete from '../../Hooks/DeleteHook';
// import UsePut from '../../Hooks/PutHook';
import UsePost from './hooks/postHook';
// import {Event} from "../classes/event";
// const UsePost= require('./hooks/postHook')
// const Event= require('../classes/event')

const http = ' http://localhost:3000' || process.env.API_URL;

const eventSlice = createSlice({
    name: "event",
    initialState: {},
    reducers: {
        // Get: (state) => {
        //     const [get, data] = UseGet();
        //     get(`${http}/event`);
        //     state.Post = data;
        // },
        Add: (state, actions) => {
            console.log(actions.payload);
            const Post = UsePost();
            Post(`${http}/event`, actions.payload)
        },
        // Delete: (state, actions) => {
        //     const Delete = UseDelete();
        //     Delete(`${http}/event` + actions.payload.id)
        // },
        // Edit: (state, actions) => {
        //     const Put = UsePut();
        //     Put(`${http}/event`, actions.payload);
        // },
    }
});

export const { Add } = eventSlice.actions;
export const selectEvents = state => state.eventSlice.events;
export default eventSlice.reducer;