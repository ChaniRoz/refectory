import axios from 'axios';
const UsePost = () => {
    const post = async (url, data) => {
        console.log("url",url);
        try {
            console.log(data);
            await axios.post(url, data)
        } catch (error) {
          console.log(error); 
            // console.error(error)
        }
    }
    return post;
}

export default UsePost