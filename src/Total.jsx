import React from 'react'
import './App.css';

class Total extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0
    }
  }

  componentDidMount() {
    this.setState({
      total: this.props.price + this.props.shippingCost
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.price}</p>
        <p>+{this.props.shippingCost}</p>
        <hr />
        <p>={this.state.total}</p>
      </div>
    )
  }
}

export default Total;
