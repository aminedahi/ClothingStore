import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
    const {product}=props
        return (
            <div className="col-md-3 col-12 col-sm-6">
            <div className="card  "  key={product._id}>
                <Link to={`product/${product._id}`}>
                <img className="card-img" src={product.image} alt="product" />
                </Link>
                <div className="card-body">
                    <h3>{product.name} </h3>
                    <p><Rating rating={product.rating} numReviews={product.numReviews}/></p>
                    <p><strong>{product.price}$</strong> </p>
                    <button className='btn btn-outline-warning'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product