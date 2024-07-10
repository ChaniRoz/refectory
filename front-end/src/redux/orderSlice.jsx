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

// export const createorder = createAsyncThunk('', async (_order) => {
//     try {
//         const response = await axios.post(`${http}/order`, _order);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });

// export const editorder = createAsyncThunk('', async ({orderId, updateorder }) => {
//     try {
//         console.log(updateorder);
//         const response = await axios.put(`${http}/order/${orderId}`, updateorder);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });

// export const deleteorder = createAsyncThunk('', async orderId => {
//     try {
//         const response = await axios.delete(`${http}/order/${orderId}`);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });