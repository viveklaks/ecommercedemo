import React from 'react'
import Rating from './Rating'
const Product = (props) => {
    return (
        <div className="card" key={props.product._id}>
        <a href={`/product/${props.product._id}`}>
            
            <img className = "medium" src={props.product.image} alt={props.product.name}/>
        </a>
        <div className="card-body">
        <a href={`/product/${props.product._id}`}>
                <h2>{props.product.name}</h2>
            </a>
            <Rating rating={props.product.rating} numberOfReviews={props.product.numberOfReviews}/>
            <div className= "price">${props.product.price}</div>

        </div>
    </div>
    )
}
export default Product