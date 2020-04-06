import React, { Component } from 'react';
import ExchangedCurrency from "./Components/CurrencyConverter"
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <ExchangedCurrency />
      </>
    );
  }
}

export default App;
