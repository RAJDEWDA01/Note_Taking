import axios from "axios";

const BACKEND_URL = axios.create({
    baseURL: "http://localhost:4002/api/v1/notes/",
})
export default BACKEND_URL