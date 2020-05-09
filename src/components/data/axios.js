import axios from "axios";
// return a new version of axios with useful settings applied
export default axios.create({
baseURL: "https://pairs.developme.space/api/", 
        headers: {
            Accept: "application/json",
        },
});



// import axios from "axios";
// // return a new version of axios with useful settings applied
// export default axios.create({
// baseURL: "http://homestead.test/api", 
//         headers: {
//             Accept: "application/json",
//         },
// });



// baseURL: "http://homestead.test/api", params: {
// key: "b1a4b1a4b1a4-api-key-b1a4b1a4ab1a4", },
//     headers: {
//         Accept: "application/json",
// }, });