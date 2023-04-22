import axios from 'axios';
import apiConfig from './apiConfig';


const discoverConnection = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

discoverConnection.interceptors.request.use(async (config) => config);

discoverConnection.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default discoverConnection;