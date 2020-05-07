import React, { Fragment,useState, Component, useEffect } from "react";

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import {setCurrentPageNo} from '../data/actions/actions'

const mapStateToProps = (state) => {
    
    return {
        searchResults:state.searchResults,
        totalResults:state.totalResults,
        currentPage:state.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setCurrentPage: (selectedPage) => {
          dispatch(setCurrentPageNo(selectedPage))
      }
  }
}

const Pages = ({
    searchResults,
    totalResults,
    currentPage,
    setCurrentPage,
    paginate
    }) => {

    let pageNos= Math.ceil(totalResults/10)
    let pageNosArr=[]

    for (let i=0 ;i < pageNos; i++){
        pageNosArr.push(i);
    }

    return(
        <>
            <nav>
                <ul className='pagination'>
                {pageNosArr.map((item,index)=>(
                    <li key={index} className='page-link' onClick={()=>{setCurrentPage(index);paginate(index)}}>
                        {index}
                    </li>
                    
                ))}
                </ul>
            </nav>
        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Pages)

{/* <li key={index} className='page-link' onClick={()=>setCurrentPage(index)}>
{index}
</li> */}