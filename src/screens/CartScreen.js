
import { useParams,useLocation } from 'react-router-dom'

import React from 'react'

export default function CartScreen() {
    const {id} = useParams();
    const location= useLocation();
    const productId = id;
    const qty = location.search? Number(location.search.split('=')[1])
    : 1; 

    return (
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART : ProductID : {productId} Qty:{qty}
            </p>
        </div>
    )
}



