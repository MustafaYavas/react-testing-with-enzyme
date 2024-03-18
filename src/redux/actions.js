import { actionTypes } from './actionTypes';

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    const result = await response.json();
    dispatch({
      type: actionTypes.GET_POSTS,
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};
