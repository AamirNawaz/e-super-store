import React from 'react';
import { connect } from 'react-redux';
import Header from '../../layouts/Header';
import AsideNav from './AsideNav';
import PageSectionTop from './PageSectionTop';

import { addToCart, clearWishList, removeFromWishList } from '../../../redux/reducer/shope/shopeActions';
import { ToastContainer } from 'react-toastify';
import { DEV_NODE_IMAGES_PATH, NODE_IMAGES_PATH, REACT_APP_ENV } from '../../../AppConstant';



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
                                                    <div key={index} className="col-md-6">
                                                        <figure className="itemside mb-4">
                                                            <div className="aside">
                                                                <img src={REACT_APP_ENV === 'Development' ? DEV_NODE_IMAGES_PATH + `${list.image}` : NODE_IMAGES_PATH + `${list.image}`} alt=" " className="border img-md" /></div>
                                                            <figcaption className="info">
                                                                <a href="/" className="title">{list.productName}</a>
                                                                <p className="price mb-2">${list.price}</p>
                                                                <button className="btn btn-secondary btn-sm" onClick={() => props.addToCartBtn(list._id)}> Add to cart </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" data-original-title="Remove from wishlist" onClick={() => props.removeFromWishlistBtn(list._id)}> <i className="fa fa-times" /> </button>
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
        addToCartBtn: (_id) => dispatch(addToCart(_id)),
        removeFromWishlistBtn: (_id) => dispatch(removeFromWishList(_id)),
        clearWishListBtn: () => dispatch(clearWishList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWhishList);