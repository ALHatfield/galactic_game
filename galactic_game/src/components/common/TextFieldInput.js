import React from 'react';
import PropTypes from "prop-types";
import classnames from 'classnames';


const TextFieldInput = ({ field, value, label, error, type, onChange, onBlur}) => (
  <div className={ classnames("form-group", { "has-error": error }) }>
    <label className="control-label">{label}</label>
    <input
      value={value}
      type={type}
      name={field}
      className="form-control"
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <span className="help-block">{error}</span>}
  </div>
);

TextFieldInput.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
}

TextFieldInput.defaultProps = {
  type: 'text'
}

export default TextFieldInput;