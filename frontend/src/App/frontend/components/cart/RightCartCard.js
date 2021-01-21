import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

function RightCartCard(props) {
    let [promoCode, setPromoCode] = useState('');
    const [cartCount, setCartCount] = useState(0);

    function handleChange(e) {
        setPromoCode([e.target.name] = e.target.value)
    }

    const checkPromoCode = (e) => {
        e.preventDefault();
        console.log('Api call for promocode checking');
    }

    useEffect(() => {
        let count = 0;
        props.itemInCart.forEach(item => {
            count = count + item.qty;
        })
        setCartCount(count);

    }, [props.itemInCart, cartCount])

    let getTotals = 0;
    const discountAmount = 9;
    return (
        <React.Fragment>
            <div className="col-md-4 order-md-2  mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{cartCount}</span>
                </h4>
                <ul className="list-group mb-3">
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td><strong>Qty</strong></td>
                                <td><strong>Actual Price</strong></td>
                                <td><strong>Total</strong></td>
                            </tr>

                            {props.itemInCart && props.itemInCart.length ? (
                                props.itemInCart.map((CartData, index) => {
                                    getTotals = getTotals + (CartData.price * CartData.qty);
                                    return (
                                        <tr key={index}>
                                            <td>{CartData.productName}</td>
                                            <td>{CartData.qty}</td>
                                            <td>{CartData.price}</td>
                                            <td><strong>${CartData.price * CartData.qty}</strong></td>
                                        </tr>
                                    )

                                }
                                )) : ('')}


                        </tbody>
                    </table>

                    <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>{promoCode}</small>
                        </div>
                        <span className="text-success" style={{ 'marginLeft': '123px' }}>-$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong style={{ 'marginLeft': '136px' }}>${getTotals - discountAmount}</strong>


                    </li>
                </ul>
                <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" name="promoCode" onChange={(e) => handleChange(e)} />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" onClick={(e) => checkPromoCode(e)}>Redeem</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        itemInCart: state.shope.cart
    }
}
export default connect(mapStateToProps)(RightCartCard);