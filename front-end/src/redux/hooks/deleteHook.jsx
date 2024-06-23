import * as React from 'react';
import axios from 'axios';

const UseDelete = () => {

    const Delete = async (url) => {
        try {
            await axios.delete(url)
        } catch (error) {
            console.error(error)
        }
    }
    return Delete
}

export default UseDelete