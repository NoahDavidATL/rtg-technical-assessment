import React from 'react'
import './App.css';

class Product extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="Product">
        <img src={this.props.image} alt={this.props.name}/>
        <h4>{this.props.name}</h4>
        <p>{this.props.description}</p>
        <div>
          <p>{this.props.price}</p>
          <p>{this.props.shippingCost}</p>
        </div>
      </div>
    )
  }
}

export default Product;
