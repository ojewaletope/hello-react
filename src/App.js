import React, { Component } from "react";
import "./App.css";
import cards from '../src/cards'

//components
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Card from "./components/cards/Card";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Card cards={cards} />
        <Form/>
        <Footer />
      </div>
    );
  }
}

export default App;
