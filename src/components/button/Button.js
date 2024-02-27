import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonText } = props;

  const submitEvent = () => {
    if (props.emitEvent) {
      props.emitEvent();
    }
  };

  return (
    <button onClick={() => submitEvent()} data-test="button-component">
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default Button;
