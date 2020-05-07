import axios from '../axios';

export const getData = (searchQuery) => (dispatch) =>{
    axios.get(searchQuery).then(({ data })=>{
        console.log("searchdatafromapi",data);
        dispatch({
            type:"setsearch",
            data: (data.Response === "False"? data : data.Search ),
        })
        dispatch({
            type:"settotalresponses",
            data: (data.Response === "False"? 0 : data.totalResults ),
        })
    });
}
export const refreshData = (pageQuery) => (dispatch) =>{
    axios.get(pageQuery).then(({ data })=>{
        console.log("searchdatafromapi",data);
        dispatch({
            type:"setsearch",
            data: (data.Response === "False"? data : data.Search ),
        })
        dispatch({
            type:"settotalresponses",
            data: (data.Response === "False"? 0 : data.totalResults ),
        })
    });
}

export const getMovieData = (idSearchQuery) => (dispatch) =>{
    axios.get(idSearchQuery).then(({ data })=>{
        
        console.log("movieDatafromapi",data);

        dispatch({
            type:"setarticle",
            data: data,
        })
    });
}


        
// console.log("searchdatafromapi",data);

// dispatch({
//     type:"setsearch",
//     data: (data.Response === "False"? data : data.Search ),
// })

// ,
// dispatch({
//     type:"settotalresponses",
//     data: (data.Response === "False"? 0 : data.totalResults ),
// })

