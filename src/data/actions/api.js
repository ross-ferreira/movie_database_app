import axios from '../axios';

export const getData = () => (dispatch) =>{
    axios.get("").then(({ data })=>{
        
        console.log("searchdatafromapi",data);

        dispatch({
            type:"setsearch",
            data: data.Search,
        })
    });
}
