import { connect } from 'react-redux';

import { reset,setLoading } from '../../data/actions/actions'

import { getData,refreshData } from '../../data/actions/api'

import SearchForm from './SearchForm';


const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        movieArticle:state.movieArticle,
        searchResults:state.searchResults,
        initialform:state.initialform,
        currentPage:state.currentPage,
        loading:state.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataSet: (searchQuery) => {
            dispatch(getData(searchQuery))
        },
        reset:() => {
            dispatch( reset() );
        },
        updateSearchPage: (pageQuery) => {
            dispatch(refreshData(pageQuery))
        },
        setLoading:() => {
            dispatch( setLoading() );
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchForm);

