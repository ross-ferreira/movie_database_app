import React, { Fragment,useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

function SearchResults ({
  searchResults,
  movieArticle,
  getDataSetId,
  totalResults,
  setLoading,
  loading,
}) {



const handleArticle= index => {
    setLoading();
    let searchQuery=`?apikey=9bac2e43&i=${searchResults[index].imdbID}`;
    console.log("query",searchResults[index].imdbID)
    getDataSetId(searchQuery);
}

  return (
    <>
      {searchResults.length < 1 ? null:
      <>
        <h1 className="title-search-results">Search Results</h1>
        <h2 className="no-search-results">No. Results: {totalResults}</h2> 
          <div class="searchResults">
              {searchResults.Response !== "False" ? searchResults.map((item,index)=>(
                <div className="search-results-cont">
                  <picture key={index} className="poster-search-results">
                    <img key={index} className="poster-img-results" src={item.Poster}/>
                  </picture>
                  <Link to="/movie">
                    <p key={index} onClick={()=>(handleArticle(index))} imdbId={item.imdbID}>{item.Title}</p>
                  </Link>
                  <p key={index} className="search-result-year">{item.Year}</p>
                </div>
              )):null}
          </div>
          {searchResults.Response === "False" ? <h2 className="no-search-results">"No Results-Search Again"</h2>:null}
        </>
      }
    </>
  );
}

export default SearchResults;


