import { WORD_SEARCHED, VIDEO_SELECTED, SIGN_IN, SIGN_OUT } from "./type";

export const submitSearchTerm = (term) => {
  return {
    type: WORD_SEARCHED,
    payload: term,
  };
};

export const selectedVideo = (video) => {
  return {
    type: VIDEO_SELECTED,
    payload: video,
  };
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
