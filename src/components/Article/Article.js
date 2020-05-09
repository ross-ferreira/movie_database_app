import React, { Fragment,useState, Component, useEffect } from "react";

function Article ({
  searchResults,
  movieArticle,
  loading}){

  return (
    <>
      {loading? <h2 className="loading">LOADING....</h2> : 
        <>
        <button>Back To Return</button>
          <div className="article-cont">
            <picture className="poster-article">
              <img className="poster-image" src={movieArticle.Poster} />
            </picture>
            <h1 className="main-header-article">{movieArticle.Title}</h1>
            <p>Release Date: {movieArticle.Released}</p>
            <p>Run Time: {movieArticle.Runtime}</p>
            <p>Genre: {movieArticle.Genre}</p>
            <p>Plot: {movieArticle.Plot}</p>
            <p>IMDB Rating: {movieArticle.imdbRating}</p>
          </div>
        </>
      }
    </>
  );
}

export default Article;


