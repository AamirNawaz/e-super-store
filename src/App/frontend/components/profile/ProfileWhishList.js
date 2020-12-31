import React from 'react';
import { connect } from 'react-redux';
import Header from '../../layouts/Header';
import AsideNav from './AsideNav';
import PageSectionTop from './PageSectionTop';

import { addToCart, clearWishList, removeFromWishList } from '../../../redux/reducer/shope/shopeActions';
import { ToastContainer } from 'react-toastify';



function ProfileWhishList(props) {
    const { wishList } = props;
    return (
        <React.Fragment>
            <Header />
            <PageSectionTop title="My account" />
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
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <AsideNav />

                        <main className="col-md-9">
                            <article className="card">
                                <div className="card-body">
                                    <div className="row">
                                        {wishList && wishList.length ?
                                            wishList.map((list, index) => {
                                                return (
                                                    <div className="col-md-6">
                                                        <figure className="itemside mb-4">
                                                            <div className="aside">
                                                                <img src={list.image} alt=" " className="border img-md" /></div>
                                                            <figcaption className="info">
                                                                <a href="/" className="title">{list.productName}</a>
                                                                <p className="price mb-2">${list.price}</p>
                                                                <button className="btn btn-secondary btn-sm" onClick={() => props.addToCartBtn(list.productID)}> Add to cart </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title data-original-title="Remove from wishlist" onClick={() => props.removeFromWishlistBtn(list.productID)}> <i className="fa fa-times" /> </button>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                )
                                            })

                                            : <h5 style={{ color: 'red' }}>Your wish list is empty!</h5>}


                                    </div>
                                    {wishList && wishList.length > 0 ? (
                                        <button className="btn btn-danger btn-md" onClick={() => props.clearWishListBtn()}> <i className="fa fa-times" /> Clear Wishlist </button>
                                    ) :
                                        ''
                                    }
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}


        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        wishList: state.shope.wishList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartBtn: (productID) => dispatch(addToCart(productID)),
        removeFromWishlistBtn: (productID) => dispatch(removeFromWishList(productID)),
        clearWishListBtn: () => dispatch(clearWishList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWhishList);