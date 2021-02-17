import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    return (
        <div>
            <ul className="row product-list">
             <li className="col-3">
              <ProductItem title="Asan"  description="sdfsdfsd"/>
              </li> 

              <li className="col-3">
              <ProductItem title="Hasan"  description="dsfdsfdsf" />
              </li>  

              <li className="col-3">
              <ProductItem title="Ali" description="descripdsfsdfsdftion"/>
              </li>  
              <li className="col-3">
              <ProductItem title="Asi" description="descripsdfsdfdstion"/>
              </li>  
            </ul>
        </div>
     
    );
};

export default ProductList;