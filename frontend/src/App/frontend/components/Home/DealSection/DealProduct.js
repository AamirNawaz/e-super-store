import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { DEV_NODE_IMAGES_PATH, NODE_IMAGES_PATH, REACT_APP_ENV } from '../../../../AppConstant';
import { addToCart, addToWishList } from '../../../../redux/reducer/shope/shopeActions';

function DealProduct(props) {
    const products = props.dealProducts.filter(prod => prod.sale > 0);
    // sort array by desc
    const dProducts = products.sort((a, b) => Number(b.sale) - Number(a.sale));
    return (
        <React.Fragment>
            {dProducts && dProducts.length ? (
                dProducts.slice(0, 4).map((dProduct, index) => {
                    return (
                        <div key={index} className="col-md col-6">
                            <figure className="card-product-grid card-sm" style={{ border: '1px solid #ebecf0' }}>
                                <Link to={`/product-details/${dProduct._id}`} className="img-wrap">
                                    <span className="badge badge-danger">Sale {dProduct.sale}% </span>
                                    <img src={REACT_APP_ENV === 'Development' ? DEV_NODE_IMAGES_PATH + `${dProduct.image}` : NODE_IMAGES_PATH + `${dProduct.image}`} alt={dProduct.productName} />
                                </Link>
                                <div className="text-wrap p-3">
                                    <Link to="/shope-products" className="title"> {dProduct.category ? dProduct.category.name : ''}</Link>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <span className="badge badge-default" style={{ color: 'gray' }}> ${dProduct.price} </span><br />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 offset-md-2">
                                            <button className="btn btn-primary btn-sm" onClick={() => props.addToCartBtn(dProduct._id)}> <i className="fas fa-cart-plus"></i>  Cart </button>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn btn-outline-primary btn-sm" onClick={() => props.addToWishListBtn(dProduct._id)}> <i className="fa fa-heart" />  wishlist </button>
                                        </div>
                                    </div>

                                </div>
                            </figure>
                        </div>

                    )
                })

            )
                : ('')}


        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        dealProducts: state.shope.products && state.shope.products.length ? state.shope.products : []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartBtn: (productID) => dispatch(addToCart(productID)),
        addToWishListBtn: (_id) => dispatch(addToWishList(_id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DealProduct);