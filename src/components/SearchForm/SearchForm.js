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
    <div>
      <header><h1>Movie Database</h1></header>
      <div class="titleSearch">
      <form onSubmit={handleSubmit} class="pb-5">
              <label>Title</label>
              <div class="input-group">
                  <input placeholder="Enter Title" onChange={handleFormChange} type="text" name="title" value={formValues.title} />
              </div>
              <label>Year</label>
              <div class="input-group">
                  <input placeholder="Enter Title" onChange={handleFormChange} type="text" name="year" value={formValues.year} />
              </div>
              <label>Plot</label>
              <div class="input-group">
                  <select defaultValue={formValues.plot} type="text" name="plot" onChange={handleFormChange}>
                    <option value="short">Short</option>
                    <option value="full">Full</option>
                </select>
              </div>
              <button className="btn" type="submit">Search</button>
              <button className="btn" type="submit">Reset</button>
          </form>
          <div>
            {formValues.title}
          </div>
          <div>
            {formValues.year}
          </div>
          <div>
            {formValues.plot}
          </div>
          {searchResults.map((item,index)=>(
            <p>{item.Title}</p>
          ))}

      </div>

    </div>
  );
}

export default SearchForm;


