import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DEV_NODE_IMAGES_PATH, NODE_IMAGES_PATH, REACT_APP_ENV } from '../../../../AppConstant';
import item14 from '../../../../assets/images/items/14.jpg'
import { addToCart, addToWishList } from '../../../../redux/reducer/shope/shopeActions';

function index(props) {
    const { eProducts } = props;
    return (
        <React.Fragment>
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Electronics</h4>
                </header>
                <div className="card card-home-category">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="home-category-banner bg-light-orange">
                                <h5 className="title">Machinery items for manufacturers</h5>
                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href="/" className="btn btn-outline-primary rounded-pill">Source now</a>
                                <img src={item14} alt="item14" className="img-bg" />
                            </div>
                        </div> {/* col.// */}

                        <div key={index} className="col-md-9">
                            <ul className="row no-gutters bordered-cols">
                                {eProducts && eProducts.length ? (
                                    eProducts.slice(0, 12).map((product, index) => {
                                        return (
                                            <li key={index} className="col-6 col-lg-3 col-md-4">

                                                <div className="card-body">
                                                    <h6 className="title">{product.productName}</h6>

                                                    <Link to={`/product-details/${product._id}`} className="item">
                                                        <img className="img-sm float-right" src={REACT_APP_ENV === 'Development' ? DEV_NODE_IMAGES_PATH + `${product.image}` : NODE_IMAGES_PATH + `${product.image}`} alt={product.productName} />
                                                    </Link>
                                                    <p className="text-muted"><i className="fa fa-map-marker-alt" /> <Link to="/shope-products">{product.manufacturer}</Link></p>
                                                    <p className="text-muted">$ {product.price}</p>
                                                    <p className="text-muted"> {product.stock}</p>
                                                    <p className="text-muted"> {product.guarantee}</p>
                                                    <div className="row">
                                                        <div className="col-md-4 offset-md-2">
                                                            <button className="btn btn-primary btn-sm" onClick={() => props.addToCartBtn(product._id)}> <i className="fas fa-cart-plus"></i>  Cart </button>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <button className="btn btn-outline-primary btn-sm" onClick={() => props.addToWishListBtn(product._id)}> <i className="fa fa-heart" />  wishlist </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                ) : ('')}
                                {eProducts.length > 12 ?
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-12"><Link to="/shope-products" style={{
                                        textDecoration: 'underline',
                                        color: '#ff6a00', float: 'right'
                                    }}>View More</Link></div>
                                    : ('')
                                }

                            </ul>
                        </div>




                    </div> {/* row.// */}
                </div> {/* card.// */}
            </section>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        eProducts: state.shope.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartBtn: (productID) => dispatch(addToCart(productID)),
        addToWishListBtn: (_id) => dispatch(addToWishList(_id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(index);