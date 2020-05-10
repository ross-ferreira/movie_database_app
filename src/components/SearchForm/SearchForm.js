import React, { Fragment, useState, Component, useEffect } from "react";

import SearchResults from '../SearchResults';

import Pages from '../Pages'

import Loading from '../Loading';


function SearchForm({
  getDataSet,
  reset,
  initialform,
  currentPage,
  updateSearchPage,
  setLoading,
  loading,
  searchResults,
  typeValue,
  handleSelectedType,
  plotValue,
  handleSelectedPlot,
  handleFormSubmit,

}) {

  //Set Search Inputs
  const [formValues, setFormValues] = useState(initialform)
  const handleFormChange = (e) => setFormValues({
    ...formValues,
    [e.target.name]: e.target.value,
  });


  // Search Request to API Actions
  let searchQuery = `?apikey=9bac2e43&type=${typeValue}&s=${formValues.title}&y=${formValues.year}&plot=${plotValue}&page=${currentPage}`;
  const handleSearch = e => {
    e.preventDefault();
    handleFormSubmit(formValues);
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
    let pageQuery = `?apikey=9bac2e43&type=${typeValue}&s=${initialform.title}&y=${initialform.year}&plot=${plotValue}&page=${currentPage}`;
    updateSearchPage(pageQuery);
  }

  return (
    <>
      <body className="titleSearch">
        <form className="searchForm">
          <div className="type-box">
            <label className="search-form-label">Type</label>
            <div className="form-check">
              <label>
                  <input
                      type="radio"
                      name="type"
                      value="series"
                      checked={typeValue === "series"}
                      onChange={(event) => handleSelectedType(event.target.value)}
                      className="form-check-input"
                  />Series
              </label>
              </div>
              <div className="form-check">
              <label>
                  <input
                      type="radio"
                      name="type"
                      value="movie"
                      checked={typeValue === "movie"}
                      onChange={(event) => handleSelectedType(event.target.value)}
                      className="form-check-input"
                  />Movie
              </label>
              </div>
          </div>
          <div className="title-box" >
            <label className="search-form-label">Title</label>
            <div className="input-group">
              <input placeholder="Enter Title" onChange={handleFormChange} type="text" name="title" value={formValues.title} />
            </div>
            <label className="search-form-label">Year</label>
            <div className="input-group">
              <input placeholder="Enter Year" onChange={handleFormChange} type="text" name="year" value={formValues.year} />
            </div>
          </div>
          <div className="plot-box">
            <label className="search-form-label">Plot</label>
            <div className="form-check">
              <label>
                  <input
                      type="radio"
                      name="plot"
                      value="short"
                      checked={plotValue === "short"}
                      onChange={(event) => handleSelectedPlot(event.target.value)}
                      className="form-check-input"
                  />Short Movie
              </label>
              </div>
              <div className="form-check">
              <label>
                  <input
                      type="radio"
                      name="plot"
                      value="full"
                      checked={plotValue === "full"}
                      onChange={(event) => handleSelectedPlot(event.target.value)}
                      className="form-check-input"
                  />Full Length Movie
              </label>
            </div>
            </div>
        </form>
        <div className="btn-box">
          <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
          <button onClick={handleReset} className="btn btn-outline-danger" type="submit">Reset</button>
        </div>
      </body>
      {/* <div>
        {typeValue}
      </div>
      <div>
        {formValues.title}
      </div>
      <div>
        {formValues.year}
      </div>
      <div>
        {plotValue}
      </div> */}
        {loading ? <h1><Loading/></h1> :
        <>
          <SearchResults />
          {searchResults.length > 1 ? <Pages className="pagination-cont" paginate={paginate} /> : <div className="oscars-cont"><img clasName="oscars-imag"src="https://whnt.com/wp-content/uploads/sites/20/2017/01/ezgif-com-video-to-gif.gif"/></div> }
        </>
        }
      

    </>
  );
}

export default SearchForm;




