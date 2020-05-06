import React, { Fragment,useState, Component, useEffect } from "react";

import { connect } from 'react-redux';

import { getData } from '../data/actions/api'


const mapStateToProps = (state) => {
    
    return {
        movieArticle:state.movieArticle,

    }
}

function Article ({searchResults,movieArticle}){

  return (
    <>
      
      <img src={movieArticle.Poster} />
      <header><h1>{movieArticle.Title}</h1></header>
      <p>{movieArticle.Released}</p>
      <p>{movieArticle.Runtime}</p>
      <p>{movieArticle.Genre}</p>
      <p>{movieArticle.Plot}</p>
      <p>{movieArticle.imdbRating}</p>
    </>
  );
}

export default connect(mapStateToProps)(Article);


