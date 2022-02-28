import React from 'react'
import './App.css';
import { Total } from './Total'

export const Product = (props) => {
    /* deconstruct the props */
    const {image, name, description: desc, shippingCost: shipping} = props;

    return (
        <div className="Product">
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>{desc}</p>
            <Total {...props} />
        </div>
    )
}
