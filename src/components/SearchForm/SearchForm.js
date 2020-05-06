import React, { Fragment,useState, Component, useEffect } from "react";

import axios from "axios";
import SearchResults from "../SearchResults";

function SearchForm({
  getDataSet,
  }) 
{
  
  // useEffect(() => {
  //   getDataSet(searchQuery);
  // }, []);

  const initalform={
    title:"",
    year:"",
    plot:"short",
}

const [formValues,setFormValues]= useState(initalform)


const handleFormChange = (e) => setFormValues({
    ...formValues,
    [e.target.name]: e.target.value,
  });

let searchQuery=`?apikey=9bac2e43&s=${formValues.title}&y=${formValues.year}`;

const handleSearch= e => {
    e.preventDefault();
    getDataSet(searchQuery);
}

  return (
    <div>
      <header><h1>Movie Database</h1></header>
      <div class="titleSearch">
      <form class="pb-5">
              <label>Title</label>
              <div class="input-group">
                  <input placeholder="Enter Title" onChange={handleFormChange} type="text" name="title" value={formValues.title} />
              </div>
              <label>Year</label>
              <div class="input-group">
                  <input placeholder="Enter Year" onChange={handleFormChange} type="text" name="year" value={formValues.year} />
              </div>
              <label>Plot</label>
              <div class="input-group">
                  <select defaultValue={formValues.plot} type="text" name="plot" onChange={handleFormChange}>
                    <option value="short">Short</option>
                    <option value="full">Full</option>
                </select>
              </div>             
          </form>
          <button onClick={handleSearch} className="btn" type="submit">Search</button>
          <button className="btn" type="submit">Reset</button>
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
      </div>

    </div>
  );
}

export default SearchForm;

