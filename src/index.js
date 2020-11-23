import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import studentReducer from './reducers/studentReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import './preschool.css'

//set up the store => import create store from redux. it comes from redux.
//import createStore from redux for async requests
//import provider, anything we wrap in provider will have access to the redux store

import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

let store = createStore(studentReducer, composeEnhancers(applyMiddleware(thunk)))
//need to incorporate compose so I can combine multiple middlewares and pass one argument in. Reducers take in an action &
//previous state, and they return a new state.
//anytime something is dispatched, I want that action object sent to the reducer which will update the store.


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

//passing in store to the App, so any child/grandchild can use and update the data in the store


//provider makes it so the store is global to all components and containers, aka App and all its children.
//They will have access to the store that I pass into the provider
