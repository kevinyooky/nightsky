import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {searchTermReducer} from './searchReducer'
import selectedReducer from './selectedReducer'
import authReducer from './authReducer'



export default combineReducers({
  form: formReducer,
  searchTerm: searchTermReducer, 
  selectedVideo: selectedReducer, 
  auth: authReducer
})