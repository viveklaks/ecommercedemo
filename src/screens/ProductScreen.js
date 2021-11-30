import React ,{useEffect , useState} from 'react'
import Rating from '../components/Rating'

import { Link, useParams , useNavigate} from 'react-router-dom'
import { useSelector  ,useDispatch} from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { detailsProducts } from '../actions/productActions'
export default function ProductScreen(props) {
    const {id}= useParams()
    
    const productId = id;
    const history = useNavigate();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    
    const productDetails = useSelector(state=> state.productDetails);
    const {loading ,error,product} = productDetails;
    useEffect(() => {
       dispatch(detailsProducts(productId));
      }, [dispatch,productId])
    const addToCartHandler = () =>{
        history(`/cart/${productId}?qty=${qty}`)
    }  
    return (
        <div>
        {
          loading ? (<LoadingBox></LoadingBox>) :
          error ? (<MessageBox variant="danger">{error}</MessageBox>) :
          (
            <div>
            <Link to="/"> back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li><h1>{product.name}</h1></li>
                        <li><Rating
                          rating={product.rating}
                          numberOfReview={product.numberOfReviews}
                        ></Rating></li>
                        <li>Price : ${product.price}</li>
                        <li>Description: <p>{product.description}</p></li>
                    </ul>
                   
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>status</div>
                                    <div>
                                        {
                                            product.countInStock > 0 ?(
                                            <span className="success">In Stock</span>):
                                            <span className="danger">Unavailable</span>
                                        }
                                    </div>
                                </div>
                            </li>
                            {
                                product.countInStock>0 &&(
                                    <React.Fragment>
                                        <li>
                                            <div className="row">
                                            <div>Qty</div>
                                                <div>
                                                    <select value={qty} onChange={e => setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()]
                                                        .map((x) =>(
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                        )
                                                        )
                                                    }
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                             <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                    </li>
                                    </React.Fragment>
                                    

                                )
                            }
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
            )
        }
          
           
       </div>
        
    )
}
