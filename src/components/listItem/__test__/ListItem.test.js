import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils/index';
import ListItem from '../ListItem';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    test('It should not throw a warning', () => {
      const exceptedProps = {
        title: 'Example Title',
        desc: 'Some text',
      };
      const propsError = checkProps(ListItem, exceptedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some text',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test('It should renders without error', () => {
      const component = findByTestAttr(wrapper, 'list-item-component');
      expect(component.length).toBe(1);
    });

    test('It should render a title', () => {
      const title = findByTestAttr(wrapper, 'component-title');
      expect(title.length).toBe(1);
    });

    test('It should render a description', () => {
      const desc = findByTestAttr(wrapper, 'component-desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some test',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test('It should render component', () => {
      const component = findByTestAttr(wrapper, 'list-item-component');
      expect(component.length).toBe(0);
    });
  });
});
