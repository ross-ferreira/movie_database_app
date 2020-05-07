import { connect } from 'react-redux';

import { reset } from '../../data/actions/actions'

import { getData,refreshData } from '../../data/actions/api'

import SearchForm from './SearchForm';


const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        movieArticle:state.movieArticle,
        searchResults:state.searchResults,
        initalform:state.initalform,
        currentPage:state.currentPage,
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchForm);

