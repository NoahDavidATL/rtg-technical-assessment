import React from 'react'
import Total from './Total'
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
        <Total {...this.props} />
      </div>
    )
  }
}

export default Product;
