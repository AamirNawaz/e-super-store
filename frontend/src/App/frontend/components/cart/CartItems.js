import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { clearCart, decrmentQty, incrmentQty, removeFromCart } from '../../../redux/reducer/shope/shopeActions'
import { ToastContainer } from 'react-toastify';
import { DEV_NODE_IMAGES_PATH, NODE_IMAGES_PATH, REACT_APP_ENV } from '../../../AppConstant';
import CartItemsSumary from './CartItemsSumary';

class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { cartItems } = this.props;

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
                <section className="section-content padding-y">
                    <div className="container">
                        <div className="row">
                            <main className="col-md-9">
                                <div className="card">
                                    <table className="table table-borderless table-shopping-cart">
                                        <thead className="text-muted">
                                            <tr className="small text-uppercase">
                                                <th scope="col">Product</th>
                                                <th scope="col" width={140}>Quantity</th>
                                                <th scope="col" width={120}>Price</th>
                                                <th scope="col" width={120}>Total Price</th>
                                                <th scope="col" className="text-right" width={200}> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.length > 0 ?
                                                cartItems.map((item, index) => {

                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <figure className="itemside">
                                                                    <div className="aside"><img src={REACT_APP_ENV === 'Development' ? DEV_NODE_IMAGES_PATH + `${item.image}` : NODE_IMAGES_PATH + `${item.image}`} alt="" className="img-sm" /></div>
                                                                    <figcaption className="info">
                                                                        <Link to={`product-details/${item._id}`} className="title text-dark">{item.productName}</Link>
                                                                        <p className="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                                                                    </figcaption>
                                                                </figure>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-success btn-xs" onClick={() => this.props.incrmentQtyBtn(item._id)}> + </button> {item.qty} <button className="btn btn-danger btn-xs" onClick={() => this.props.decrementQtyBtn(item._id, item.qty)}> -</button>
                                                            </td>
                                                            <td>
                                                                <div className="price-wrap">
                                                                    <var className="price">${item.price}</var>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="price-wrap">
                                                                    <var className="price">${item.price * item.qty}</var>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">

                                                                <button className="btn btn-danger" onClick={() => this.props.removeFromCartBtn(item._id)}> X</button>
                                                            </td>
                                                        </tr>

                                                    )
                                                })
                                                :
                                                <tr>
                                                    <td colSpan="5">
                                                        <center><strong style={{ color: 'red' }}>Your Cart is empty!</strong></center>
                                                    </td>
                                                </tr>
                                            }


                                        </tbody>
                                    </table>
                                    <div className="card-body border-top">
                                        <button className="btn btn-danger float-md-right" onClick={() => this.props.clearCartBtn()}> Clear Cart <i className="fa fa-chevron-right" /> </button>

                                    </div>
                                    {
                                        cartItems.length <= 0 ? <div className="card-body border-top">
                                            <a href="/" className="btn btn-light"> <i className="fa fa-chevron-left" /> Continue shopping </a>
                                        </div> :

                                            <div className="card-body border-top">
                                                <Link to="/check-out" className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right" /> </Link>
                                                <a href="/" className="btn btn-light"> <i className="fa fa-chevron-left" /> Continue shopping </a>
                                            </div>
                                    }

                                </div>
                                <div className="alert alert-success mt-3">
                                    <p className="icontext"><i className="icon text-success fa fa-truck" /> Free Delivery within 1-2 weeks</p>
                                </div>
                            </main>

                            {/* CartItems summary */}
                            <CartItemsSumary colValue={'col-md-3'} cartSection={true} />
                        </div>
                    </div>
                </section>


            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shope.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCartBtn: (_id) => dispatch(removeFromCart(_id)),
        incrmentQtyBtn: (_id) => dispatch(incrmentQty(_id)),
        decrementQtyBtn: (_id, qty) => dispatch(decrmentQty(_id, qty)),
        clearCartBtn: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
