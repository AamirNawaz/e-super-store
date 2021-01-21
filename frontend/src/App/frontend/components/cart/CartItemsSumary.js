import React, { Component } from 'react';
import { connect } from 'react-redux';
import payments from '../../../assets/images/misc/payments.png';
import { decrmentQty, incrmentQty, removeFromCart } from '../../../redux/reducer/shope/shopeActions';
class CartItemsSumary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            couponCode: '',
            dummyDiscount: 0,
            getTotals: 0
        }
    }



    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkCouponCode = (e) => {
        e.preventDefault();
        if (this.state.couponCode === 'ABC123') {
            this.setState({
                dummyDiscount: 50
            })
        } else {
            this.setState({
                dummyDiscount: 0
            })
        }

    }
    render() {
        const { dummyDiscount } = this.state;
        let getTotals = 0;
        this.props.cartItems.map(item => getTotals = getTotals + (item.price * item.qty));

        return (
            <React.Fragment>
                <aside className={`${this.props.colValue}`}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Have coupon?</label>
                                    <div className="input-group">
                                        <input type="text" name="couponCode" className="form-control" placeholder="Coupon code" onChange={(e) => this.handleOnChange(e)} />
                                        <span className="input-group-append">
                                            <button className="btn btn-primary" onClick={(e) => this.checkCouponCode(e)}>Apply</button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div> {/* card-body.// */}
                    </div>  {/* card .// */}
                    {!this.props.cartSection ?
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Name</strong></td>
                                            <td><strong>Qty</strong></td>
                                            <td><strong>Price</strong></td>
                                            <td><strong>Total</strong></td>
                                            <td>Action</td>
                                        </tr>
                                        {this.props.cartItems.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.productName}</td>
                                                    <td>{item.qty}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.qty * item.price}</td>
                                                    <td> <button className="btn btn-success btn-sm" onClick={() => this.props.incrmentQtyBtn(item._id)}>+</button> <button className="btn btn-warning btn-sm" onClick={() => this.props.decrementQtyBtn(item._id, item.qty)}>-</button> <button className="btn btn-danger btn-sm" onClick={() => this.props.removeFromCartBtn(item._id)}> X</button></td>
                                                </tr>
                                            )
                                        })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        : ('')}


                    <div className="card">
                        <div className="card-body">
                            <dl className="dlist-align">
                                <dt>Total price:</dt>
                                <dd className="text-right">USD {getTotals}</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Discount:</dt>
                                <dd className="text-right">USD {dummyDiscount}</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Total:</dt>
                                <dd className="text-right  h5"><strong>${getTotals - dummyDiscount}</strong></dd>
                            </dl>
                            <hr />
                            <p className="text-center mb-3">
                                <img src={payments} alt="" height={26} />
                            </p>
                        </div> {/* card-body.// */}
                    </div>  {/* card .// */}
                </aside>
            </React.Fragment>
        );
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsSumary)
