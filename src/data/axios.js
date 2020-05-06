import axios from "axios";

export default axios.create({
baseURL: "http://www.omdbapi.com/", 
        headers: {
            Accept: "application/json",
        },
});
