import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import CartHeader from './components/CartHeader.js'
//import CartFooter from './components/CartFooter.js'
//import CartItems from './components/CartItems.js'
const CartHeader = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Shopping Cart</a>
    </nav>

  )
}

const CartItems = (props) => {
  console.log('props in cart items', props)
  let listItems = props.items.map((item, index) => {
    console.log('item in a loop', item, index)
    return (
      <div className="d-flex list-group-item" key={item.id}>
        <div className="col-md-8">{item.product.name}</div>
        <div className="col-md-2">{item.product.priceInCents}</div>
        <div className="col-md-2">{item.quantity}</div>
      </div>
    )
  })
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row px-3">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        <div>
          {listItems}
        </div>
        {/* {props.cartItemsList} */}
      </div>
    </div>
  )
}
const CartItem = () => {
  return (
    <div>
      Hello
    </div>
  )
}

const CartFooter = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">&copy; {props.copyright}</a>
    </nav>
  )
}

class App extends Component {
  render() {
    let cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

    console.log('items in App component', cartItemsList)

    return (
      <div>
        <CartHeader />
        <CartItems items={cartItemsList} />
        <CartFooter copyright="2016" />
      </div>
    );
  }
}

export default App;
