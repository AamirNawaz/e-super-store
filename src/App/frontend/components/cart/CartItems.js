import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { decrmentQty, incrmentQty, removeFromCart } from '../../../redux/reducer/shope/shopeActions'
import payments from '../../../assets/images/misc/payments.png';
import { ToastContainer } from 'react-toastify';

class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { cartItems } = this.props;
        let getTotals = -0;
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
                                            {
                                                cartItems.map((item) => {
                                                    getTotals = getTotals + (item.price * item.qty);
                                                    return (
                                                        <tr key={item.productID}>
                                                            <td>
                                                                <figure className="itemside">
                                                                    <div className="aside"><img src={item.image} alt="" className="img-sm" /></div>
                                                                    <figcaption className="info">
                                                                        <Link to={`product-details/${item.productID}`} className="title text-dark">{item.productName}</Link>
                                                                        <p className="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                                                                    </figcaption>
                                                                </figure>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-success btn-xs" onClick={() => this.props.incrmentQtyBtn(item.productID)}> + </button> {item.qty} <button className="btn btn-danger btn-xs" onClick={() => this.props.decrementQtyBtn(item.productID, item.qty)}> -</button>
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

                                                                <button className="btn btn-danger" onClick={() => this.props.removeFromCartBtn(item.productID)}> X</button>
                                                            </td>
                                                        </tr>

                                                    )
                                                })
                                            }


                                        </tbody>
                                    </table>
                                    <div className="card-body border-top">
                                        <a href="/" className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right" /> </a>
                                        <a href="/" className="btn btn-light"> <i className="fa fa-chevron-left" /> Continue shopping </a>
                                    </div>
                                </div> {/* card.// */}
                                <div className="alert alert-success mt-3">
                                    <p className="icontext"><i className="icon text-success fa fa-truck" /> Free Delivery within 1-2 weeks</p>
                                </div>
                            </main> {/* col.// */}
                            <aside className="col-md-3">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Have coupon?</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Coupon code" />
                                                    <span className="input-group-append">
                                                        <button className="btn btn-primary">Apply</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div> {/* card-body.// */}
                                </div>  {/* card .// */}
                                <div className="card">
                                    <div className="card-body">
                                        <dl className="dlist-align">
                                            <dt>Total price:</dt>
                                            <dd className="text-right">USD {getTotals}</dd>
                                        </dl>
                                        <dl className="dlist-align">
                                            <dt>Discount:</dt>
                                            <dd className="text-right">USD 0.00</dd>
                                        </dl>
                                        <dl className="dlist-align">
                                            <dt>Total:</dt>
                                            <dd className="text-right  h5"><strong>${getTotals}</strong></dd>
                                        </dl>
                                        <hr />
                                        <p className="text-center mb-3">
                                            <img src={payments} alt="" height={26} />
                                        </p>
                                    </div> {/* card-body.// */}
                                </div>  {/* card .// */}
                            </aside> {/* col.// */}
                        </div>
                    </div> {/* container .//  */}
                </section>
                {/* ========================= SECTION CONTENT END// ========================= */}

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
        removeFromCartBtn: (productID) => dispatch(removeFromCart(productID)),
        incrmentQtyBtn: (productID) => dispatch(incrmentQty(productID)),
        decrementQtyBtn: (productID, qty) => dispatch(decrmentQty(productID, qty))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
