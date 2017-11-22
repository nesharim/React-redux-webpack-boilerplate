import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    return (
      <h1>{`Have a great day from ${this.props.name}`}</h1>
    );
  }
}

render(<App name="Rafa" />, document.getElementById('container'));
