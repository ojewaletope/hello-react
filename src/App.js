import React, { Component } from 'react';
import './App.css';

//components
import Header from './components/header/Header'
import Banner from './components/banner/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
      </div>
    );
  }
}

export default App;
