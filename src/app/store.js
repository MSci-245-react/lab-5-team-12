import { configureStore } from '@reduxis/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
reducer:{
    counter: counterReducer,
},

})