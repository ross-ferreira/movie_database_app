import React, { Fragment, useState, Component, useEffect } from "react";

import axios from 'axios';
import SearchResults from '../SearchResults';
import Pages from '../Pages'
import { reset } from "../../data/actions/actions";

function SearchForm({
  getDataSet,
  reset,
  initialform,
  currentPage,
  updateSearchPage,
  setLoading,
  loading,
  searchResults,
}) {
;
  //Set Search Inputs
  const [formValues, setFormValues] = useState(initialform)
  const handleFormChange = (e) => setFormValues({
    ...formValues,
    [e.target.name]: e.target.value,
  });

  // Search Request to API Actions
  let searchQuery = `?apikey=9bac2e43&type=${formValues.type}&s=${formValues.title}&y=${formValues.year}&page=${currentPage}`;
  const handleSearch = e => {
    e.preventDefault();
    setLoading();
    getDataSet(searchQuery);
  }

  //Reset Search Bar
  const handleReset = (e) => {
    e.preventDefault();
    reset();
    setFormValues(initialform);
  }

  // console.log("current page",currentPage);

  //Change Page
  const paginate = (item) => {
    setLoading();
    let pageQuery = `?apikey=9bac2e43&type=${formValues.type}&s=${formValues.title}&y=${formValues.year}&page=${item}`;
    updateSearchPage(pageQuery);
  }

  return (
    <div>
      <header><h1>Movie Database</h1></header>
      <div className="titleSearch">
        <form className="pb-5">
          <label>Type</label>
          <div className="input-group">
            <select defaultValue={formValues.type} type="text" name="type" onChange={handleFormChange}>
              <option value="series">Series</option>
              <option value="movie">Movie</option>
            </select>
          </div>
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
          {formValues.type}
        </div>
        <div>
          {formValues.title}
        </div>
        <div>
          {formValues.year}
        </div>
        <div>
          {formValues.plot}
        </div>
        {loading? <h1>LOADING.....</h1>:
          <> 
            <SearchResults />
            {searchResults.length > 1 ? <Pages paginate={paginate}/> : null }
          </>
        }
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



