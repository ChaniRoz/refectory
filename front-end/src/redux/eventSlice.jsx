// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
// import UseGet from './hooks/getHook'
// import UseDelete from '../../Hooks/DeleteHook';
import UsePut from './hooks/putHook';
import UsePost from './hooks/postHook';
// import {Event} from "../classes/event";
// const UsePost= require('./hooks/postHook')
// const Event= require('../classes/event')

const http = ' http://localhost:3000' || process.env.API_URL;

export let init = {
    diners: 0,
    date: 0,
    houer: 0,
    design: "Black",
    type: "Pareve"
}

const eventSlice = createSlice({
    name: "event",
    initialState: init,
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
