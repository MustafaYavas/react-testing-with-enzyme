import { actionTypes } from '../../actionTypes';
import { PostsReducer } from './postsReducer';

describe('Posts reducer', () => {
  test('It should return default state', () => {
    const newState = PostsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  test('It should return new state if receiving type', () => {
    const posts = [
      { title: 'Test 1' },
      { title: 'Test 2' },
      { title: 'Test 3' },
    ];

    const newState = PostsReducer(undefined, {
      type: actionTypes.GET_POSTS,
      payload: posts,
    });

    expect(newState).toEqual(posts);
  });
});
