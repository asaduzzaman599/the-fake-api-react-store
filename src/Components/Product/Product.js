import React from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const Product = ({product,count}) => {
    // console.log(count)
    const {title,image,description} = product;
    return (
        <div className='col-md-4'>
            <div className="card p-3 border h-100 justify-content-between">
            <div>
            <img  style={{width:"100%",height:"200px"}} src={image} alt="" />
            <h3>{title}</h3>
            <p>{description.length>70?description.slice(0,70):description}</p>
            </div>
            <div className='d-flex justify-content-around '>
                <button onClick={count} className='btn btn-warning'>Add to Cart</button>
                <ProductDetail product={product} count={count}></ProductDetail>
            </div>
            </div>
        </div>
    );
};

export default Product;