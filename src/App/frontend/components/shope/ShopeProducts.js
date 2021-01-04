import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { addToCart, addToWishList, /*fetchProducts*/ } from '../../../redux/reducer/shope/shopeActions';

class ShopeProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // componentDidMount = () => {
    //     this.props.fetchProductsCall();
    // }



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


                        {/* ============================  FILTER TOP  ================================= */}
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2"> Your are here: </div> {/* col.// */}
                                    <nav className="col-md-8">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item"><a href="/">Category name</a></li>
                                            <li className="breadcrumb-item"><a href="/">Sub category</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Items</li>
                                        </ol>
                                    </nav> {/* col.// */}
                                </div> {/* row.// */}
                                <hr />
                                <div className="row">
                                    <div className="col-md-2">Filter by</div> {/* col.// */}
                                    <div className="col-md-10">
                                        <ul className="list-inline">
                                            <li className="list-inline-item mr-3 dropdown"><a href="/" className="dropdown-toggle" data-toggle="dropdown">   Supplier type </a>
                                                <div className="dropdown-menu p-3" style={{ maxWidth: 400 }}>
                                                    <label className="form-check">
                                                        <input type="radio" name="myfilter" className="form-check-input" /> Good supplier
              </label>
                                                    <label className="form-check">
                                                        <input type="radio" name="myfilter" className="form-check-input" /> Best supplier
              </label>
                                                    <label className="form-check">
                                                        <input type="radio" name="myfilter" className="form-check-input" /> New supplier
              </label>
                                                </div> {/* dropdown-menu.// */}
                                            </li>
                                            <li className="list-inline-item mr-3 dropdown">
                                                <a href="/" className="dropdown-toggle" data-toggle="dropdown">  Country </a>
                                                <div className="dropdown-menu p-3">
                                                    <label className="form-check"> 	 <input type="checkbox" className="form-check-input" /> China  </label>
                                                    <label className="form-check">   	 <input type="checkbox" className="form-check-input" /> Japan    </label>
                                                    <label className="form-check">    <input type="checkbox" className="form-check-input" /> Uzbekistan</label>
                                                    <label className="form-check">  <input type="checkbox" className="form-check-input" /> Russia   </label>
                                                </div> {/* dropdown-menu.// */}
                                            </li>
                                            <li className="list-inline-item mr-3 dropdown">
                                                <a href="/" className="dropdown-toggle" data-toggle="dropdown">Feature</a>
                                                <div className="dropdown-menu">
                                                    <a href="/" className="dropdown-item">Anti backterial</a>
                                                    <a href="/" className="dropdown-item">With buttons</a>
                                                    <a href="/" className="dropdown-item">Extra safety</a>
                                                </div>
                                            </li>
                                            <li className="list-inline-item mr-3"><a href="/">Color</a></li>
                                            <li className="list-inline-item mr-3"><a href="/">Size</a></li>
                                            <li className="list-inline-item mr-3">
                                                <div className="form-inline">
                                                    <label className="mr-2">Price</label>
                                                    <input className="form-control form-control-sm" placeholder="Min" type="number" />
                                                    <span className="px-2"> - </span>
                                                    <input className="form-control form-control-sm" placeholder="Max" type="number" />
                                                    <button type="submit" className="btn btn-sm btn-light ml-2">Ok</button>
                                                </div>
                                            </li>
                                            <li className="list-inline-item mr-3">
                                                <label className="custom-control mt-1 custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <div className="custom-control-label">Ready to ship
              </div>
                                                </label>
                                            </li>
                                        </ul>
                                    </div> {/* col.// */}
                                </div> {/* row.// */}
                            </div> {/* card-body .// */}
                        </div> {/* card.// */}
                        {/* ============================ FILTER TOP END.// ================================= */}

                        <header className="mb-3">
                            <div className="form-inline">
                                <strong className="mr-md-auto">32 Items found </strong>
                                <select className="mr-2 form-control">
                                    <option>Latest items</option>
                                    <option>Trending</option>
                                    <option>Most Popular</option>
                                    <option>Cheapest</option>
                                </select>
                                <div className="btn-group">
                                    <a href="page-listing-grid.html" className="btn btn-light active" data-toggle="tooltip" title="List view">
                                        <i className="fa fa-bars" /></a>
                                    <a href="page-listing-large.html" className="btn btn-light" data-toggle="tooltip" title="Grid view">
                                        <i className="fa fa-th" /></a>
                                </div>
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
    const localStorageProducts = JSON.parse(localStorage.getItem('products')) ?  JSON.parse(localStorage.getItem('products')) :[]
    const reducerStateProducts = state.shope.products.length ? state.shope.products : []
  
    return {
        productsList: reducerStateProducts.length ? reducerStateProducts :localStorageProducts
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