import React, { useState } from 'react'

export default function RightCartCard() {
    let [promoCode, setPromoCode] = useState('');

    function handleChange(e) {
        setPromoCode([e.target.name] = e.target.value)
        console.log(promoCode)

    }

    return (
        <React.Fragment>
            <div className="col-md-4 order-md-2  mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 className="my-0">Product name</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$12</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 className="my-0">Second product</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 className="my-0">Third item</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span className="text-success">-$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>$20</strong>
                    </li>
                </ul>
                <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" name="promoCode" onChange={(e) => handleChange(e)} />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">Redeem</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
