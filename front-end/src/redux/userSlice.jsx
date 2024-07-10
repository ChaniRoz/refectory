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