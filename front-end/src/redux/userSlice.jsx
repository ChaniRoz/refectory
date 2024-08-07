import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';
import UseGet from './hooks/getHook';
import axios from 'axios';


const http = ' http://localhost:3000' || process.env.API_URL;

export let initUser = {
    googleId: '',
    displayName: '',
    firstName: '',
    lastName: '',
    image: ''
}
export let initUserId = ''

const userSlice = createSlice({
    name: "user",
    initialState: initUser,
    reducers: {
        Get: (state) => {
            const [get, data] = UseGet();
            get(`${http}/user`);
            state.Post = data;
        },
        Add: (state, actions) => {
            console.log(actions.payload);
            const Post = UsePost();
            Post(`${http}/user`, actions.payload)
        },
        Save: async (state, actions) => {
            initUser = actions.payload;
            try {
                const response = await axios.get(`${http}/users/${actions.payload}`);
                initUser = {
                    googleId: response.data.googleId,
                    displayName: response.data.displayName,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    image: response.data.image
                };
                initUserId=response.data._id
            } catch (error) {
                console.error(error)
            }
            console.log(initUser);
            console.log(initUserId);
        }
    }
});

export const { Add, Save } = userSlice.actions;
export const selectusers = state => state.userSlice.users;
export default userSlice.reducer;