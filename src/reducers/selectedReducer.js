import {WORD_SEARCHED, VIDEO_SELECTED} from '../actions/type'

const INITIAL_STATE = {
  selectedVideo: null
}

export default (state={INITIAL_STATE}, action) =>{
  switch(action.type){
    case WORD_SEARCHED:
      return {
        ...state, selectedVideo:action.payload.items[0]
      }
    case VIDEO_SELECTED:
      return {
        ...state, selectedVideo:action.payload
      }
    default:
      return state
  }
}