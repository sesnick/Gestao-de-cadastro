import React from 'react';
import ProductList from '../data/products';

const Catalog = () => {
  let products = ProductList.map((product) => {
    return (
      
      <li className="product" key={product.id} >
        <img className="product-img" src={product.img_src} alt="product" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price:${product.price}</p>
      </li>
      
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Catalog</h2>
      <ul className="group">
        {products}    
      </ul>
    </div>
  );
}

export default Catalog;