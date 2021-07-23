import React from 'react'

class Total extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
        }
    }
    componentDidMount() {
        let total = Number(this.props.price) + Number(this.props.shippingCost)
        this.setState({
            total : total,
        })
    }

    render () {
        const { total } = this.state
        return (
            <div>{`Total is: ${total}`}</div>
        )
    }
}

export default Total