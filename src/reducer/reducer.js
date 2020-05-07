import initial from '../data/initial'

const counterIncrease = state => ({ ...state, count: state.count + 1 });

const setSearchResults = (state,{data}) => ({ ...state, searchResults: data });

const setMovieArticle = (state,{data}) => ({ ...state, movieArticle: data });

const setTotalResponses = (state,{data}) => ({ ...state, totalResults: data });

const setCurrentPage = (state,{selectPage}) => ({ ...state, currentPage: selectPage });

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state);
        case "setsearch": return setSearchResults (state,action);
        case "setarticle": return setMovieArticle (state,action);
        case "settotalresponses": return setTotalResponses (state,action);
        case "SETCURRENTPAGE": return setCurrentPage (state,action);
        case "RESET": return initial;
        default: return state;
    }
};