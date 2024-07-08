import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';

const http =' http://localhost:3000'|| process.env.API_URL ;

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        // Get: (state) => {
        //     const [get, data] = UseGet();
        //     get(`${http}/user`);
        //     state.Post = data;
        // },
        Add: (state, actions) => {
            console.log(actions.payload);
            const Post = UsePost();
            Post(`${http}/user`, actions.payload)
        },
    }
});

export const { Add } = userSlice.actions;
export const selectusers = state => state.userSlice.users;
export default userSlice.reducer;

// export const createuser = createAsyncThunk('', async (_user) => {
//     try {
//         const response = await axios.post(`${http}/user`, _user);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });

// export const edituser = createAsyncThunk('', async ({userId, updateuser }) => {
//     try {
//         console.log(updateuser);
//         const response = await axios.put(`${http}/user/${userId}`, updateuser);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });

// export const deleteuser = createAsyncThunk('', async userId => {
//     try {
//         const response = await axios.delete(`${http}/user/${userId}`);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// });