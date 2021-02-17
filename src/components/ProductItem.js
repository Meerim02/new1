import React from 'react';
import cardPhoto from '../img/image.jpg'

const ProductItem = (props) => {
    return (
        <div className="card">
        <img className="card-img-top" src={cardPhoto} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    );
};

export default ProductItem;