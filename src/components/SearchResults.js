import React, { Fragment,useState, Component, useEffect } from "react";

import axios from "axios";

function SearchForm({
  getDataSet,
  searchResults,
  movieArticle}) 
{

  useEffect(() => {
    getDataSet();
}, []);

  const initalform={
    title:"",
    year:"",
    plot:"short",
}

const [formValues,setFormValues]= useState(initalform)


const handleFormChange = (e) => setFormValues({
    ...formValues,
    [e.target.name]: e.target.name === 'distance' ? parseInt(e.target.value) : e.target.value,
  });


const handleSubmit= e => {
    e.preventDefault();
}


  return (
    <>
      <header><h1>Search Results</h1></header>
      <div class="searchResults">
          {searchResults.map((item,index)=>(
            <p>{item.Title}</p>
          ))}
      </div>

    </>
  );
}

export default SearchForm;


