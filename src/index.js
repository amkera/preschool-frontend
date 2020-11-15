import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

//set up the store => import create store from redux. it comes from redux.
//import createStore from redux for async requests
//import provider, anything we wrap in provider will have access to the redux store

import App from './App';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
//need to incorporate compose so I can combine multiple middlewares and pass one argument in. Reducers take in an action
//previous state, and they make a new state.


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//provider makes it so the store is global to all components and containers, aka App and all its children.
//They will have access to the store that I pass into the provider
