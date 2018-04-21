import React, { Component } from 'react';
import AddItem from './AddItem'
const CartHeader = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Shopping Cart</a>
    </nav>

  )
}

const CartItems = (props) => {
  //console.log('props in cart items', props)
  let listItems = props.items.map((item, index) => {
    //console.log('item in a loop', item, index)
    return (
      <div className="d-flex list-group-item" key={index}>
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
  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }

  handleFormSubmit = (product) => {
    const { cartItemsList } = this.state

    this.setState({
      cartItemsList: [...cartItemsList, product]
    })
  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.cartItemsList} />
        <AddItem
          products={this.state.products}
          handleFormSubmit={this.handleFormSubmit}
        />
        <CartFooter copyright="2016" />
      </div>
    );
  }
}

export default App;
