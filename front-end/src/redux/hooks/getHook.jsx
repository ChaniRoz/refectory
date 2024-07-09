
import axios from 'axios';

const UseGet = () => {
    const get = async (url , data) => {
        try {
            await axios.get(url , data)
        } catch (error) {
            console.error(error)
        }
    }

    return get;
}

export default UseGet