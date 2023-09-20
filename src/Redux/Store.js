import { legacy_createStore as createStore }  from '@reduxjs/toolkit'
import reducers from './Reducers'
import state from './State'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default createStore(reducers, state, applyMiddleware(thunk))

