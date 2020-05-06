import React, { Fragment,useState, Component, useEffect } from "react";
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import SearchForm from './components/SearchForm';
import Article from './components/Article';

import './App.css';

function App() {
  return (
    <>
      <Fragment>
        <Router>
          {/* <Footer/> */}
          <Route exact path="/">
          <SearchForm/>
          </Route>
          <Route exact path="/movie">
            <Article/>
          </Route>
        </Router>
      </Fragment>
    </>
  );
}

export default App;


