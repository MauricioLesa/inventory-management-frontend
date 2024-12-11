import axios from "axios";


const BACKENDURL = "http://localhost:8080"

export const connection = axios.create({
    withCredentials:true,
    baseURL: BACKENDURL,
    headers: {
        
    },
});

