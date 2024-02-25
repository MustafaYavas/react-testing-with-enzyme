import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import { findByTestAttr } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header-component');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a logo', () => {
    const logo = findByTestAttr(component, 'logo-img');
    expect(logo.length).toBe(1);
  });
});
