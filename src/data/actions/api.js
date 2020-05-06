import axios from '../axios';

export const getData = (searchQuery) => (dispatch) =>{
    axios.get(searchQuery).then(({ data })=>{
        
        console.log("searchdatafromapi",data);

        dispatch({
            type:"setsearch",
            data: data.Search,
        })
    });
}

export const getMovieData = (idSearchQuery) => (dispatch) =>{
    axios.get(idSearchQuery).then(({ data })=>{
        
        console.log("searchdatafromapi",data);

        dispatch({
            type:"setarticle",
            data: data,
        })
    });
}
