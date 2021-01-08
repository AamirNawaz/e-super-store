import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { addToCart, addToWishList, /*fetchProducts*/ } from '../../../redux/reducer/shope/shopeActions';
import SearchFilterProducts from './SearchFilterProducts';

class ShopeProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        // this.props.fetchProductsCall();
        
        //goto the top of page when page loaded  
        window.scrollTo(0, 0)
          
    }



    render() {
        const { productsList } = this.props;
        return (
            <React.Fragment>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* <!-- ========================= SECTION CONTENT ========================= --> */}
                <section className="section-content padding-y">
                    <div className="container">


                      <SearchFilterProducts />

                        <header className="mb-3">
                            <div className="form-inline">
                                <strong className="mr-md-auto">Category : Shoes  >  {productsList.length} Items found </strong>
                                <select className="mr-2 form-control">
                                    <option>Latest items</option>
                                    <option>Trending</option>
                                    <option>Most Popular</option>
                                    <option>Cheapest</option>
                                </select>
                                {/* <div className="btn-group">
                                    <a href="page-listing-grid.html" className="btn btn-light active" data-toggle="tooltip" title="List view">
                                        <i className="fa fa-bars" /></a>
                                    <a href="page-listing-large.html" className="btn btn-light" data-toggle="tooltip" title="Grid view">
                                        <i className="fa fa-th" /></a>
                                </div> */}
                            </div>
                        </header>{/* sect-heading */}
                        <div className="row">

                            {productsList.map((product, index) => {
                                return (
                                    <div className="col-md-3" key={index}>
                                        <figure className="card card-product-grid">
                                            <div className="img-wrap">
                                                <span className="badge badge-danger"> NEW </span>
                                                <img src={product.image} alt="" />
                                            </div>
                                            <figcaption className="info-wrap">
                                                <Link to={`/product-details/${product._id}`} className="title mb-2">{product.details}</Link>
                                                <div className="price-wrap">
                                                    <span className="price">${product.price} </span>
                                                    <small className="text-muted">/per item</small>
                                                </div>
                                                <p className="mb-2"> {product.qty} Pieces  <small className="text-muted">(Min Order)</small></p>
                                                <p className="text-muted ">{product.productName}</p>
                                                <hr />

                                                <button className="btn btn-primary" onClick={() => this.props.addToCartBtn(product._id)}> <i className="fa fa-envelope" /> Add to Cart </button>
                                        &nbsp;&nbsp;<button className="btn btn-outline-primary" onClick={() => this.props.addToWishListBtn(product._id)}> <i className="fa fa-heart" /> Add to wishlist </button>
                                            </figcaption>
                                        </figure>
                                    </div>)

                            })}



                        </div> {/* row end.// */}
                        <nav className="mb-4" aria-label="Page navigation sample">
                            <ul className="pagination">
                                <li className="page-item disabled"><a className="page-link" href="/">Previous</a></li>
                                <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item"><a className="page-link" href="/">4</a></li>
                                <li className="page-item"><a className="page-link" href="/">5</a></li>
                                <li className="page-item"><a className="page-link" href="/">Next</a></li>
                            </ul>
                        </nav>
                        <div className="box text-center">
                            <p>Did you find what you were looking for？</p>
                            <a href="/" className="btn btn-light">Yes</a>
                            <a href="/" className="btn btn-light">No</a>
                        </div>
                    </div>
                </section>
                {/* container .//  */}
                {/* ========================= SECTION CONTENT END// ========================= */}


            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productsList: state.shope.products
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartBtn: (_id) => dispatch(addToCart(_id)),
        addToWishListBtn: (_id) => dispatch(addToWishList(_id)),
        // fetchProductsCall: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopeProducts);