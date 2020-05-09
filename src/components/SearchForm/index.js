import { connect } from 'react-redux';

import { reset,setLoading,setType,setPlot,setSearchForm } from '../../data/actions/actions'

import { getData,refreshData } from '../../data/actions/api'

import SearchForm from './SearchForm';


const mapStateToProps = (state) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        movieArticle: state.movieArticle,
        searchResults: state.searchResults,
        initialform: state.initialform,
        currentPage: state.currentPage,
        loading: state.loading,
        typeValue: state.typeValue,
        plotValue: state.plotValue,
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
        handleSelectedType: (selectedType) => {
            dispatch(setType(selectedType))
        },

        handleSelectedPlot: (selectedPlot) => {
            dispatch(setPlot(selectedPlot))
        },
        handleFormSubmit: (formValues) => {
            dispatch(setSearchForm(formValues))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchForm);

