import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import item15 from '../../../assets/images/items/15.jpg';
import item15_1 from '../../../assets/images/items/15-1.jpg';
import item15_2 from '../../../assets/images/items/15-2.jpg';
import { addToCart } from '../../../redux/reducer/shope/shopeActions';

function ProductDetails(props) {
    const { productID } = useParams();
    let item = null;
    const productsData = JSON.parse(localStorage.getItem('products'));
    if (productsData === null) {
        console.log('empty localstorege');
        //here we need to call single prodcut from api
        return <Redirect to="/" />
    } else {
        item = productsData.find((prod) => prod._id === productID);
    }



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

            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content bg-white padding-y">
                <div className="container">
                    {/* ============================ ITEM DETAIL ======================== */}
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">


                                        <div> <a href="/"><img src={item.image} alt="" /></a></div>
                                    </div>
                                    <div className="thumbs-wrap">
                                        <a href="/" className="item-thumb"> <img src={item15} alt="" /></a>
                                        <a href="/" className="item-thumb"> <img src={item15_1} alt="" /></a>
                                        <a href="/" className="item-thumb"> <img src={item15_2} alt="" /></a>
                                        <a href="/" className="item-thumb"> <img src={item15_1} alt="" /></a>
                                    </div>
                                </article>
                            </div>
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">
                                <h2 className="title mt-3">{item.productName} </h2>
                                <div className="rating-wrap my-3">
                                    <ul className="rating-stars">
                                        <li style={{ width: '80%' }} className="stars-active">
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                    <small className="label-rating text-muted">{item.reviews} reviews</small>
                                    <small className="label-rating text-success"> <i className="fa fa-clipboard-check" /> {item.orders} orders </small>
                                </div> {/* rating-wrap.// */}
                                <div className="mb-3">
                                    <var className="price h4">USD {item.price}</var>
                                    <span className="text-muted"> USD {item.price} incl. VAT</span>
                                </div>
                                <p>{item.details} </p>
                                <dl className="row">
                                    <dt className="col-sm-3">Manufacturer</dt>
                                    <dd className="col-sm-9"><a href="/">{item.manufacturer}</a></dd>
                                    <dt className="col-sm-3">Guarantee</dt>
                                    <dd className="col-sm-9">{item.guarantee} year</dd>
                                    <dt className="col-sm-3">Delivery time</dt>
                                    <dd className="col-sm-9">{item.deliveryTime} days</dd>
                                    <dt className="col-sm-3">Availabilty</dt>
                                    <dd className="col-sm-9">{item.stock ? 'In Stock' : 'Out of Stock'}</dd>
                                </dl>

                                <div className="form-group col-md">
                                    <button className="btn btn-success btn-xs"> + </button> 1 <button className="btn btn-danger btn-xs"> -</button>
                                </div> {/* col.// */}
                                <div className="form-row  mt-4">


                                    <div className="form-group col-md">
                                        <button className="btn  btn-primary" onClick={() => props.addToCartBtn(item._id)}>
                                            <i className="fas fa-shopping-cart" /> <span className="text">Add to cart</span>
                                        </button>
                                        &nbsp;
                                        &nbsp;
                                        <a href="/" className="btn btn-info">
                                            <i className="fas fa-envelope" /> <span className="text">Contact supplier</span>
                                        </a>
                                    </div> {/* col.// */}
                                </div> {/* row.// */}
                            </article> {/* product-info-aside .// */}
                        </main> {/* col.// */}
                    </div> {/* row.// */}
                    {/* ================ ITEM DETAIL END .// ================= */}
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
            {/* ========================= SECTION  ========================= */}
            {/* ========================= SECTION CONTENT END// ========================= */}


        </React.Fragment >
    )
}
const mapStateToProps = (state) => {

    return {
        products: state.shope.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartBtn: (_id) => dispatch(addToCart(_id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);