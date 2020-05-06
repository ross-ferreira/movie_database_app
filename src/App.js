import React, { Fragment,useState, Component, useEffect } from "react";
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import SearchForm from './components/SearchForm'

import './App.css';

function App() {
  return (
    <>
      <SearchForm/>
    </>
  );
}

export default App;


