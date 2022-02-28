import React, { useState, useEffect } from 'react'
import './App.css';

export const Total = (props) => {
    /* setup state for total */
    const [total, setTotal] = useState(0);

    /* deconstruct the props */
    const {price, shipping} = props;

    /* do some math */
    let newTotal = price + shipping;

    /* update the total */
    useEffect(() => {
        setTotal(newTotal);
    }, [price, shipping])

    return (
        <div>
            <p>{price}</p>
            <p>+{shipping}</p>
            <hr />
            <p>={total}</p>
        </div>
    )
}
