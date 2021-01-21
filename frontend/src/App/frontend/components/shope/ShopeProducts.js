import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { DEV_NODE_IMAGES_PATH, NODE_IMAGES_PATH, REACT_APP_ENV } from '../../../AppConstant';
import paginate from '../../../helper/paginate';
import Pagination from '../../../helper/Pagination';
import { addToCart, addToWishList, /*fetchProducts*/ } from '../../../redux/reducer/shope/shopeActions';
// import SearchFilterProducts from './SearchFilterProducts';

class ShopeProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 12,
            currentPage: 1
        }
    }

    componentDidMount = () => {
        // this.props.fetchProductsCall();

        //goto the top of page when page loaded  
        window.scrollTo(0, 0)

    }

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

    handleNext = (event) => {
        const pagesCount = Math.ceil(this.state.users.length / this.state.pageSize);
        if (this.state.currentPage < pagesCount)
            this.setState({
                currentPage: this.state.currentPage + 1

            });
    }

    handlePrevious = (event) => {
        if (this.state.currentPage > 1)
            this.setState({
                currentPage: this.state.currentPage - 1,
            });
    }


    render() {
        const { productsList: allproducts } = this.props;
        let totalCount = 0;
        const { currentPage, pageSize } = this.state;
        const productsList = paginate(allproducts, currentPage, pageSize);

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


                        {/* <SearchFilterProducts /> */}

                        <header className="mb-3">
                            <div className="form-inline">
                                <strong className="mr-md-auto">Category : Shoes  {`>`}  {productsList.length} Items found </strong>
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

                            {productsList && productsList.map((product, index) => {
                                totalCount = (currentPage - 1) * pageSize + index + 1;
                                return (
                                    <div className="col-md-3" key={index}>
                                        <figure className="card card-product-grid">
                                            <Link to={`/product-details/${product._id}`} className="title mb-2">
                                                <div className="img-wrap">
                                                    <span className="badge badge-danger"> NEW </span>
                                                    <img src={REACT_APP_ENV === 'Development' ? DEV_NODE_IMAGES_PATH + `${product.image}` : NODE_IMAGES_PATH + `${product.image}`} alt="" />
                                                </div>
                                            </Link>
                                            <figcaption className="info-wrap">
                                                <Link to={`/product-details/${product._id}`} className="title mb-2">{product.details}</Link>
                                                <div className="price-wrap">
                                                    <span className="price">${product.price} </span>
                                                    <small className="text-muted">/per item</small>
                                                </div>
                                                <p className="mb-2"> {product.qty} Pieces  <small className="text-muted">(Min Order)</small></p>
                                                <p className="text-muted ">{product.productName}</p>
                                                <hr />

                                                <button className="btn btn-primary" onClick={() => this.props.addToCartBtn(product._id)}> <i className="fas fa-cart-plus"></i> Add to Cart </button>
                                        &nbsp;&nbsp;<button className="btn btn-outline-primary" onClick={() => this.props.addToWishListBtn(product._id)}> <i className="fa fa-heart" /> Add to wishlist </button>
                                            </figcaption>
                                        </figure>
                                    </div>)

                            })}



                        </div> {/* row end.// */}
                        <Pagination recordCount={allproducts && allproducts.length ? allproducts.length : 0}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                            NextPage={this.handleNext}
                            PreviousPage={this.handlePrevious}
                            colSpan={7}
                            Url="/shope-products"
                            totalCount={totalCount}
                            hideShowTotalCount={true}
                        />

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
        productsList: state.shope.products,
        categories: state.categoryReducer.categories
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