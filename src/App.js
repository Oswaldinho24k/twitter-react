import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/profilePage';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Profile/>
      </div>
    );
  }
}

export default App;
