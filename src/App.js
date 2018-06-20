import React, { Component } from "react";
import "./App.css";

//components
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Card from "./components/cards/Card";
import Form from "./components/form/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Card />
        <Form/>
      </div>
    );
  }
}

export default App;
