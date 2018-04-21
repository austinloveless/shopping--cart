import React, { Component } from 'react';

class AddItem extends Component {
  state = {
    name: '',
    priceInCents: 0,
    quantity: 1
  }

  onSubmit = (event) => {
    event.preventDefault()
    event.persist()
    const { products } = this.props
    const productsLength = products.length
    const id = products[productsLength - 1].id + 1
    const { name, priceInCents, quantity } = this.state

    const newProduct = {
      product: {
        id,
        name,
        priceInCents
      },
      quantity
    }
    this.props.handleFormSubmit(newProduct)
  }

  onSelectChange = (event) => {
    const index = event.nativeEvent.target.selectedIndex
    const select = event.nativeEvent.target
    const name = select[index].text
    const priceInCents = event.target.value

    this.setState({ name, priceInCents })
  }

  renderProductOptions = () => {
    const { products } = this.props

    return products.map((product) => (
      <option
        key={product.id}
        value={product.priceInCents}
      >
          {product.name}
      </option>
    ))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <label>
            Quantity:
            <input
              type="text"
              onChange={ (e) => this.setState({quantity: e.target.value}) }
              name="quantity"
            />

          </label>
        </p>
        <p>
          <label>
            Products:
            <select onChange={this.onSelectChange}>
              <option>Select an option...</option>
              {
                this.renderProductOptions()
              }
            </select>
          </label>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    )
  }
}

export default AddItem
