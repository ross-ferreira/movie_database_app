import React, { Fragment,useState, Component, useEffect } from "react";

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { getMovieData} from '../data/actions/api'


const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        movieArticle:state.movieArticle,
        searchResults:state.searchResults,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getDataSetId: (idSearchQuery) => {
          dispatch(getMovieData(idSearchQuery))
      }
  }
}

function SearchResults ({searchResults,movieArticle,getDataSetId}){



const handleArticle= index => {
    // e.preventDefault();
    let searchQuery=`?apikey=9bac2e43&i=${searchResults[index].imdbID}`;
    console.log("query",searchResults[index].imdbID)
    getDataSetId(searchQuery);
}

  return (
    <>
      <header><h1>Search Results</h1></header>
      <div class="searchResults">
          {searchResults.map((item,index)=>(
            <>
            <p key={index}>{index +1})</p>
            <Link to="/movie">
              <p onClick={()=>(handleArticle(index))} imdbId={item.imdbID}>{item.Title}</p>
            </Link>
            </>
          ))}
      </div>

    </>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);


