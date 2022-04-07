import React, { useState } from 'react'
import { Product } from './Product'
import product_data from './product_data'
import './App.css';

export const ProductList = () => {
  /* instantiate the state */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* define a delay */
  const delay = time => new Promise(resolve => setTimeout(resolve, time));

  /* mock a network call */
  delay(1500).then(() => {
    setProducts(product_data.products);
    setLoading(false);
  });

  return (
    <div className="Product-list">
      {loading && (<div className="Product-list"><p className="Loading">Loading...</p></div>)}
      {!loading && (
        products.map(item =>
          <Product
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            shippingCost={item.shippingCost}
          />
        )
      )}
    </div>
  )
}
