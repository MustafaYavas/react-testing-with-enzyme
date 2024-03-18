import { actionTypes } from '../../actionTypes';

export const PostsReducer = (state = [], action) => {
  const { type, payload } = action;

  if (type === actionTypes.GET_POSTS) {
    return payload;
  } else {
    return state;
  }
};
