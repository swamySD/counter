
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import counterReducer from './counterReducer';
 import { composeWithDevTools } from 'redux-devtools-extension';
const middleware=[thunk]
const store =createStore(
    counterReducer,
    composeWithDevTools(applyMiddleware(...middleware,logger))
)

export default store