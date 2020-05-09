import { connect } from 'react-redux';

import {setCurrentPageNo} from '../../data/actions/actions'

import Pages from './Pages';

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

export default connect(mapStateToProps,mapDispatchToProps)(Pages)
