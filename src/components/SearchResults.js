import React, { Fragment,useState, Component, useEffect } from "react";

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { getMovieData} from '../data/actions/api'

import Pages from './Pages'


const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        movieArticle:state.movieArticle,
        searchResults:state.searchResults,
        totalResults:state.totalResults,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getDataSetId: (idSearchQuery) => {
          dispatch(getMovieData(idSearchQuery))
      }
  }
}

function SearchResults ({searchResults,movieArticle,getDataSetId,totalResults}){



const handleArticle= index => {
    // e.preventDefault();
    let searchQuery=`?apikey=9bac2e43&i=${searchResults[index].imdbID}`;
    console.log("query",searchResults[index].imdbID)
    getDataSetId(searchQuery);
}

  return (
    <>
      {searchResults.length < 1 ? null:
      <>
        <h1>Search Results</h1>
        <h2>No of Results: {totalResults}</h2> 
          <div class="searchResults">
              {searchResults.Response !== "False" ? searchResults.map((item,index)=>(
                <>
                <p key={index}>{index +1})</p>
                <Link to="/movie">
                  <p key={index} onClick={()=>(handleArticle(index))} imdbId={item.imdbID}>{item.Title}</p>
                </Link>
                </>
              )):null}
            {searchResults.Response === "False" ? <h2>"No Results"</h2>:null}
          </div>
        </>
      }
    </>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);


