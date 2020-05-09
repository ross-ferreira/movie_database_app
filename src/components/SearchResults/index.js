import { connect } from 'react-redux';

import { getMovieData } from '../../data/actions/api';

import {setLoading} from '../../data/actions/actions';

import SearchResults from './SearchResults';


const mapStateToProps = (state) => {
    
    return {
        movieArticle:state.movieArticle,
        searchResults:state.searchResults,
        totalResults:state.totalResults,
        initialform:state.initialform,
        currentPage:state.currentPage,
        loading:state.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getDataSetId: (idSearchQuery) => {
          dispatch( getMovieData(idSearchQuery) )
      },
      setLoading:() => {
        dispatch( setLoading() );
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);


