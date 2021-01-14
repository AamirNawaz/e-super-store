import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { DEV_NODE_IMAGES_PATH, NODE_IMAGES_PATH, REACT_APP_ENV } from '../../../../AppConstant';
import { addToCart, addToWishList } from '../../../../redux/reducer/shope/shopeActions';

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
                props.productData.slice(0, 6).map((product, index) => {

                    return (<div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link to={`/product-details/${product._id}`} className="img-wrap">
                                <img src={REACT_APP_ENV === 'Development' ? DEV_NODE_IMAGES_PATH + `${product.image}` : NODE_IMAGES_PATH + `${product.image}`} alt={product.productName} />

                            </Link>
                            <figcaption className="info-wrap">
                                <Link to={`/product-details/${product._id}`} className="title">{product.productName}</Link>
                                <div className="price mt-1">${product.price}</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary btn-sm" onClick={() => this.props.addToCartBtn(product._id)}> <i class="fas fa-cart-plus"></i>  Cart </button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => this.props.addToWishListBtn(product._id)}> <i className="fa fa-heart" />  wishlist </button>
                                    </div>

                                </div>


                            </figcaption>
                        </div>
                    </div>
                    )

                }) : ('')}
            {props.productData.length > 6 ?
                <div className="col-xl-12 col-lg-12 col-md-12 col-12"><Link to="/shope-products" style={{
                    textDecoration: 'underline',
                    color: '#ff6a00', float: 'right'
                }}>View More</Link></div>
                : ('')
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
        addToCartBtn: (productID) => dispatch(addToCart(productID)),
        addToWishListBtn: (_id) => dispatch(addToWishList(_id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
