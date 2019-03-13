import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <h3><font color='teal'>Add Restaurant</font></h3>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' value={this.state.text} onChange={ this.handleChange } />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
