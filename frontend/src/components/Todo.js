import React, { PropTypes } from 'react';
import { Input } from 'react-bootstrap';

const Todo = props => (
  <Input
    type="checkbox"
    label={ props.text }
    onChange={ props.onChange }
    checked={ props.done }
  />
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Todo;
