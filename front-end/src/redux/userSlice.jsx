import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';
import UseGet from './hooks/getHook';
import axios from 'axios';


const http = ' http://localhost:3000' || process.env.API_URL;

export let init = {
    googleId: '',
    displayName: '',
    firstName: '',
    lastName: '',
    image: ''
}

const userSlice = createSlice({
    name: "user",
    initialState: init,
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
            init = actions.payload;
            try {
                const response = await axios.get(`${http}/users/${actions.payload}`);
                init = {
                    googleId: response.data.googleId,
                    displayName: response.data.displayName,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    image: response.data.image
                };
            } catch (error) {
                console.error(error)
            }
            console.log(init);
        }
    }
});

export const { Add, Save } = userSlice.actions;
export const selectusers = state => state.userSlice.users;
export default userSlice.reducer;