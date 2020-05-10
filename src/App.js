import React, { Fragment } from "react";

import { HashRouter as Router, Route,Switch } from "react-router-dom";

import SearchForm from './components/SearchForm';

import Article from './components/Article';

import Footer from "./components/Footer";

import Header from "./components/Header";


import './App.css';


function App() {
  return (
    <>
      <Fragment>
        <Router>
          <Footer/>
          <Header/>
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


