import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { addToCart } from '../../../../redux/reducer/shope/shopeActions';

function ProductItem(props) {
    return (

        <React.Fragment>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {props.productData.length ? 
                props.productData.slice(0,6).map((product, index) => {
                    
                    return (<div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link to={`/product-details/${product._id}`} className="img-wrap"> <img src={product.image} alt={product.productName} /> </Link>
                            <figcaption className="info-wrap">
                                <Link to={`/product-details/${product._id}`} className="title">{product.productName}</Link>
                                <div className="price mt-1">${product.price}</div>
                                <button className="btn btn-warning btn-sm" onClick={() => props.addToCartBtn(product._id)}>Add To Cart</button>
                            </figcaption>
                        </div>
                    </div>
                    )

                }): ('')}
                {props.productData.length >6  ?
                <div className="col-xl-12 col-lg-12 col-md-12 col-12"><Link to="/shope-products"  style={{textDecoration: 'underline',
    color: '#ff6a00',float:'right'}}>View More</Link></div>
                :('')
                }
            

        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        productData: state.shope.products
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCartBtn: (productID) => dispatch(addToCart(productID))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
