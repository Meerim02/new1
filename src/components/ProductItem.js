import React from 'react';
import cardPhoto from '../img/image.jpg'

const ProductItem = (props) => {
  const item = props.item
    return (
        <div className="card mt-4">
        <img className="card-img-top" src={cardPhoto} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}som</p>
          <button onClick={props.addToCart} className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    );
};

export default ProductItem;