import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <Fragment>
    <input
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      className={`input ${props.classes}`}
      id={props.id}
      onChange={props.onChange}
    />
  </Fragment>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
  classes: PropTypes.string,
  onChange: PropTypes.func,
};


export default Input;