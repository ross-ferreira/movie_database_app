import axios from "axios";

export default axios.create({
baseURL: "http://www.omdbapi.com/?s=speed&apikey=9bac2e43", 
        headers: {
            Accept: "application/json",
        },
});
