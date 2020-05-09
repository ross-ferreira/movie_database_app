import initial from '../data/initial'

const counterIncrease = state => ({ ...state, count: state.count + 1 });

const setSearchResults = (state,{data}) => ({ ...state, searchResults: data });

const setMovieArticle = (state,{data}) => ({ ...state, movieArticle: data });

const setTotalResponses = (state,{data}) => ({ ...state, totalResults: data });

const setCurrentPage = (state,{selectPage}) => ({ ...state, currentPage: selectPage });

const loadingState = state => ({ ...state, loading: !state.loading});

const setType = (state,{newTypeValue}) => ({ ...state, typeValue: newTypeValue});

const setPlot = (state,{newPlotValue}) => ({ ...state, plotValue: newPlotValue});

const setSearchForm = (state,{newSearchValue}) => ({ ...state, initialform: newSearchValue});

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease (state);
        case "setsearch": return setSearchResults (state,action);
        case "setarticle": return setMovieArticle (state,action);
        case "settotalresponses": return setTotalResponses (state,action);
        case "setloading": return loadingState (state);
        case "SETCURRENTPAGE": return setCurrentPage (state,action);
        case "SETTYPE": return setType (state,action);
        case "SETPLOT": return setPlot (state,action);
        case "SETSEARCHFORM": return setSearchForm (state,action);
        case "RESET": return initial;
        default: return state;
    }
};