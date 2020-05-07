import React, { Fragment,useState, Component, useEffect } from "react";

import axios from 'axios';
import SearchResults from '../SearchResults';
import Pages from '../Pages'
import { reset } from "../../data/actions/actions";

function SearchForm({
  getDataSet,
  reset,
  initalform,
  currentPage,
  updateSearchPage,
  }) 
{

//Set Search Inputs
const [formValues,setFormValues]= useState(initalform)
const handleFormChange = (e) => setFormValues({
    ...formValues,
    [e.target.name]: e.target.value,
  });

// Search Request to API Actions
let searchQuery=`?apikey=9bac2e43&s=${formValues.title}&y=${formValues.year}&page=${currentPage}`;
const handleSearch= e => {
    e.preventDefault();
    getDataSet(searchQuery);
}

//Reset Search Bar
const handleReset=(e)=>{
  e.preventDefault();
  reset();
  setFormValues(initalform);
}

// console.log("current page",currentPage);

//Change Page
const paginate =(index) => {
  let pageQuery=`?apikey=9bac2e43&s=${formValues.title}&y=${formValues.year}&page=${index}`;
  updateSearchPage(pageQuery);
}

  return (
    <div>
      <header><h1>Movie Database</h1></header>
      <div className="titleSearch">
      <form className="pb-5">
              <label>Title</label>
              <div className="input-group">
                  <input placeholder="Enter Title" onChange={handleFormChange} type="text" name="title" value={formValues.title} />
              </div>
              <label>Year</label>
              <div className="input-group">
                  <input placeholder="Enter Year" onChange={handleFormChange} type="text" name="year" value={formValues.year} />
              </div>
              <label>Plot</label>
              <div className="input-group">
                  <select defaultValue={formValues.plot} type="text" name="plot" onChange={handleFormChange}>
                    <option value="short">Short</option>
                    <option value="full">Full</option>
                </select>
              </div>  
          </form>
          <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button> 
          <button onClick={handleReset} className="btn btn-outline-danger" type="submit">Reset</button>
          <div>
            {formValues.title}
          </div>
          <div>
            {formValues.year}
          </div>
          <div>
            {formValues.plot}
          </div>
          <SearchResults/>
          <Pages paginate={paginate}/>
      </div>

    </div>
  );
}

export default SearchForm;


  // useEffect(() => {
  //   getDataSet(searchQuery);
  // }, []);

//   const initalform={
//     title:"",
//     year:"",
//     plot:"short",
// }



