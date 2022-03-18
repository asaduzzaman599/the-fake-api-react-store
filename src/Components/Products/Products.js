import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = (props) => {
    
  const [products, setProducts] = useState([]);

  console.log(products)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
  },[])
    return (
        <div className='container'>
           <div className="row g-3">
           <h3>ALL Products</h3>
            
            {
                products.map(product=> <Product count={props.count} key={product.id} product={product}></Product>)
            }
           </div>
           
        </div>
    );
};

export default Products;