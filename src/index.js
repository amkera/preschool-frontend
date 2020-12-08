import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import studentReducer from './reducers/studentReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import './preschool.css'
import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
//app can now work with redux dev tools

let store = createStore(studentReducer, composeEnhancers(applyMiddleware(thunk)))
//need to incorporate compose to combine multiple middlewares and pass one argument in.



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
