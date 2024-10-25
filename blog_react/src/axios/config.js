import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
        // Isso aqui nem precisa
        algumacoisa: "teste"
    
    }
})

export default blogFetch
