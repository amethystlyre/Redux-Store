//import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './reducers'

//const store = createStore(reducer)
const store = configureStore({
    reducer: reducer})

export default store