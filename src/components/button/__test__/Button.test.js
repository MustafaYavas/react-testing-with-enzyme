import React from 'react';
import { findByTestAttr, checkProps } from '../../../utils/index';
import Button from '../Button';
import { shallow } from 'enzyme';

describe('Button component', () => {
  describe('Checking PropTypes', () => {
    test('It should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example button text',
        emitEvent: () => {},
      };

      const propError = checkProps(Button, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example button text',
        emitEvent: () => {},
      };
      wrapper = shallow(<Button {...props} />);
    });

    test('It should render a button', () => {
      const button = findByTestAttr(wrapper, 'button-component');
      expect(button.length).toBe(1);
    });
  });
});
