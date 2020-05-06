import initial from '../data/initial'

const counterIncrease = state => ({ ...state, count: state.count + 1 });

const setSearchResults = (state,{data}) => ({ ...state, searchResults: data });

const setMovieArticle = (state,{data}) => ({ ...state, movieArticle: data });

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state);
        case "setsearch": return setSearchResults (state,action);
        case "setarticle": return setMovieArticle (state,action);
        case "RESET": return initial;
        default: return state;
    }
};