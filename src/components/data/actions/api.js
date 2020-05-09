import axios from '../axios';

export const getData = () => (dispatch) =>{
    axios.get("/cards").then(({ data })=>{
        
        console.log("datafromapi",data);

        dispatch({
            type:"setCards",
            data: data.data,
        })
    });
}


// import axios from '../axios';


// export const getData = () => (dispatch) => {
//     axios.get("/").then(({ data }) => {
//         console.log(data); 
    
//         dispatch ({
//             type:"SET_IMAGES",
//             images: data.data,
//         })
//     });
// }