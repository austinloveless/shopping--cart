import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
//import CartHeader from './components/CartHeader.js'
//import CartFooter from './components/CartFooter.js'
//import CartItems from './components/CartItems.js'

class App extends Component {
  render() {
  const CartHeader = () => {
    return (
      <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Shopping Cart</a>
  </nav>

    )

  }

  const CartItems = () => {
    return (
      <div className="container">
    <h1>Cart Items</h1>
  </div>
    )
  }

  const CartFooter = (props) => {
    return (
      <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">&copy; { props.copyright }</a>
  </nav>
    )
  }


    return (
      <div>
    <CartHeader />
    <CartItems />
    <CartFooter copyright="2016"/>



      </div>
    );
  }
}

export default App;
