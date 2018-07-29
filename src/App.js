import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='content'>
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
