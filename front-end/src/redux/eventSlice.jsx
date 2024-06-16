// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
// import UseGet from '../../Hooks/GetHook'
// import UseDelete from '../../Hooks/DeleteHook';
// import UsePut from '../../Hooks/PutHook';
import UsePost from './hooks/postHook';
// import {Event} from "../classes/event";
// const UsePost= require('./hooks/postHook')
// const Event= require('../classes/event')

const http = process.env.VITE_HTTP;

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

export const {Add } = eventSlice.actions;
export const selectEvents = state => state.eventSlice.events;
export default eventSlice.reducer;

// export const createEvent = createAsyncThunk('', async (_event) => {
//     try {
//         const response = await axios.post(`${http}/event`, _event);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });

// export const editEvent = createAsyncThunk('', async ({eventId, updateEvent }) => {
//     try {
//         console.log(updateEvent);
//         const response = await axios.put(`${http}/event/${eventId}`, updateEvent);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });

// export const deleteEvent = createAsyncThunk('', async eventId => {
//     try {
//         const response = await axios.delete(`${http}/event/${eventId}`);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });