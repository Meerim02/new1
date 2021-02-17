import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    return (
        <div>
            <ul className="row product-list">
             <li className="col-3">
              <ProductItem title="Asan"  title="description"/>
              </li> 

              <li className="col-3">
              <ProductItem title="Hasan"  title="description" />
              </li>  

              <li className="col-3">
              <ProductItem title="Ali" title="description"/>
              </li>  
              <li className="col-3">
              <ProductItem title="Asi" title="description"/>
              </li>  
            </ul>
        </div>
     
    );
};

export default ProductList;