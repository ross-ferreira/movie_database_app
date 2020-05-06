import { connect } from 'react-redux';

import { getData } from '../../data/actions/api'

import SearchForm from './SearchForm';


const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        movieArticle:state.movieArticle,
        searchResults:state.searchResults,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataSet: (searchQuery) => {
            dispatch(getData(searchQuery))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchForm);

