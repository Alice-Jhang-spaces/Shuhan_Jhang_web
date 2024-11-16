import axios from 'axios'
import { accessKey } from './credentials';

//Axios request to unsplash API for images
export const fetchImagesFromAPI = async () => {
    const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
    console.log("RESPONSE", response);

    return response.data
    
} 