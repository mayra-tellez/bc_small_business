import { configureStore }  from '@reduxjs/toolkit'
import reducers from './Reducers'
import state from './State'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default configureStore({reducer:reducers}, state, applyMiddleware(thunk))