import { createStore, applyMiddleware, compose } from "redux";
import initial from '../data/initial';
import reducer from './reducer'; 
import thunk from "redux-thunk";
    
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export default createStore(
      reducer, 
      initial,
      composeEnhancers(applyMiddleware(thunk))
  
      );


    // export default createStore(
//     reducer,
//     initial, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
//   );

  // import { createStore,applyMiddleware,compose } from "redux";
  // import initialState from './initialState';
  // import reducer from './reducers/reducer';
  // import thunk from "redux-thunk";