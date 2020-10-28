import {WORD_SEARCHED} from '../actions/type'



export const searchTermReducer = (searchTerm = null, action)=>{
  if(action.type === WORD_SEARCHED) {
    return action.payload
  }
  return searchTerm
}