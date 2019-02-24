import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component {

  state = {
    data : ''
  }

  async componentDidMount() {
      let response = await axios.get('http://localhost:3006/users')
      console.log('got it!')
      this.setState({data : response.data})
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default App;
