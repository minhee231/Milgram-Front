import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.milgram.x-coll.com',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default apiClient;