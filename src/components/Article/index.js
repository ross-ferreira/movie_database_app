import React, { Fragment,useState, Component, useEffect } from "react";

import { connect } from 'react-redux';

import Article from './Article';

const mapStateToProps = (state) => {
    
    return {
        movieArticle:state.movieArticle,
        loading:state.loading,

    }
}

export default connect(mapStateToProps)(Article);


