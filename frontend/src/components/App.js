import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Panel, Input } from 'react-bootstrap';

import Todo from './Todo';
import { createTodo, updateInput, toggleTodo } from '../actions/ActionCreators';

const styles = {
  width: '80%',
  maxWidth: 500,
  margin: '10px auto',
};

class App extends Component {

  static propTypes = {
    todos: PropTypes.arrayOf(Todo.propTypes).isRequired,
    input: PropTypes.string.isRequired,
    updateInput: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDoneTodo = this.handleDoneTodo.bind(this);
  }

  handleNewTodo(event) {
    event.preventDefault();
    this.props.createTodo(this.props.input);
    this.props.updateInput('');
  }

  handleInputChange() {
    this.props.updateInput(this.refs.textField.getValue());
  }

  handleDoneTodo(index) {
    this.props.toggleTodo(index);
  }

  render() {
    const todos = this.props.todos
      .map((todo, index) => <Todo
        key={ `todo${index}` }
        { ...todo }
        onChange={ this.handleDoneTodo.bind(this, index) }
      />);

    return (
      <Panel header={ <h3>Kiron Todo App</h3> } style={ styles } >
        <form onSubmit={ this.handleNewTodo } >
          <Input
            ref="textField"
            type="text"
            placeholder="Enter new todo"
            value={ this.props.input }
            onChange={ this.handleInputChange }
          />
        </form>
        { todos }
      </Panel>
    );
  }
}

export default connect(
  state => state,
  { createTodo, updateInput, toggleTodo }
)(App);
