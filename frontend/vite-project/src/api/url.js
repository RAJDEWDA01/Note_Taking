import axios from "axios";

const axiosInstance = axios.create({
    // Make sure the port matches your running server (4002)
    baseURL: "http://localhost:4002/api/v1/notes", 
});

export default axiosInstance;