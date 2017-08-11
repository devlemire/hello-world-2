import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: ''
    };
  }

  componentDidMount() {
    axios.get('/api/test').then( response => {
      console.log(response.data);
      this.setState({ msg: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1 className="App-intro">
          This is hello-world-2
        </h1>

        { this.state.msg }
      </div>
    );
  }
}

export default App;
