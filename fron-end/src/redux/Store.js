import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import reducerProduct from "./reducer/reducer"

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducerProduct, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
  export default store