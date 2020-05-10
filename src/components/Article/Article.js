import React, { Fragment,useState, Component, useEffect } from "react";

import { Link } from 'react-router-dom';

import Loading from '../Loading';

function Article ({
  searchResults,
  movieArticle,
  loading}){

  return (
    <>
      {loading? <h2><Loading/></h2> : 
        <>
        <Link to="/">
          <div className="btn-cont-return">
            <button className="btn btn-outline-primary">Back To Results</button>
          </div>
        </Link>
        <div className="article-cont-parent">
          <div className="article-cont">
            <div className="image-title-cont">
              <picture className="poster-article">
                <img className="poster-image" src={movieArticle.Poster} />
              </picture>
              <h1 className="main-header-article">{movieArticle.Title}</h1>
            </div>
            <p><strong>IMDB Rating:</strong><br/>{movieArticle.imdbRating}</p>
            <p><strong>Release Date:</strong><br/>{movieArticle.Released}</p>
            <p><strong>Run Time:</strong><br/>{movieArticle.Runtime}</p>
            <p><strong>Genre:</strong><br/>{movieArticle.Genre}</p>
            <p><strong>Cast:</strong><br/>{movieArticle.Actors}</p>
            <p><strong>Plot:</strong><br/>{movieArticle.Plot}</p>
          </div>
        </div>
        </>
      }
    </>
  );
}

export default Article;


