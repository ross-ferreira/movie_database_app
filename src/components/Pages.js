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

    const pagesArr=[1,7,13,19,25,31,37,43,49,55,61,67,73,79,85]
    const resultsPerPage = 10;
    const neightboursPerPage=6

    const [pageCounter, setPageCounter] = useState(0)

    let pageNos= Math.ceil(totalResults/resultsPerPage)

    let pageNeighboursNo= Math.ceil(pageNos/neightboursPerPage)
    let pageNeighboursNoArr=[]
    for (let i = 1 ;i < pageNeighboursNo +1 ; i++){
        pageNeighboursNoArr.push(i);
    }
    console.log("pageNeighboursNo",pageNeighboursNo)
    console.log("pageNeighboursNoArr",pageNeighboursNoArr)


//Set Page Neighbours
    let pageNosArr=[]
    for (let i=pagesArr[pageCounter]  ;i < (pageCounter < pageNeighboursNoArr.length -1 ? pageNeighboursNoArr[pageCounter] * 6 :pageNos ) +1 ; i++){
        pageNosArr.push(i);
    }
//Page Neighbour Navigation
    const handlePageCounterInc =() =>{
        setPageCounter(pageCounter + 1)
    }
    const handlePageCounterDec =() =>{
        setPageCounter(pageCounter - 1)
    }

      console.log("pageCounter",pageCounter)
      console.log("pageNos",pageNos)

    return(
        <>
            <nav>
                <ul className='pagination'>
                    <li onClick={pageCounter >= 1 ? handlePageCounterDec : null } className='page-link'>PREV</li>
                {pageNosArr.map((item,index)=>(
                    <li key={index} className='page-link' onClick={()=>{setCurrentPage(item);paginate(item)}}>
                        { item }
                    </li>
                ))}
                    <li onClick={ pageCounter > pageNeighboursNoArr.length -2 ? null : handlePageCounterInc } className='page-link'>NEXT</li>
                    <li className='page-link'>LAST</li>
                 </ul>
            </nav>
        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Pages)
