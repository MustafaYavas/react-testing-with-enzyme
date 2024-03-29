import App from '../App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../utils/index';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title',
          body: 'Some text',
        },
        {
          title: 'Example title 2',
          body: 'Some text',
        },
        {
          title: 'Example title 3',
          body: 'Some text',
        },
      ],
    };

    wrapper = setUp(initialState);
  });

  test('It should render without errors', () => {
    const component = findByTestAttr(wrapper, 'app-component');
    expect(component.length).toBe(1);
  });
});
