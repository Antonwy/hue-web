import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import App from './App';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import {lights, currentLight} from './Redux/reducers';

const logger = createLogger();

const rootReducer = combineReducers({
    lights,
    currentLight
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));
