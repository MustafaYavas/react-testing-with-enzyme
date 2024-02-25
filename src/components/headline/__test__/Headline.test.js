import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import Headline from '../Headline';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test desc',
      };
      wrapper = setUp(props);
    });

    test('It should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headline-component');
      expect(component.length).toBe(1);
    });

    test('It should render a H1 tag', () => {
      const h1Element = findByTestAttr(wrapper, 'header');
      expect(h1Element.length).toBe(1);
    });

    test('It should render a P tag', () => {
      const pElement = findByTestAttr(wrapper, 'desc');
      expect(pElement.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    test('It should NOT render', () => {
      const component = findByTestAttr(wrapper, 'desc');
      expect(component.length).toBe(0);
    });
  });
});
