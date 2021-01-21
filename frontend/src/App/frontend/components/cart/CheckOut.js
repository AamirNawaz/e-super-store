import React from 'react';
import RightCartCard from './RightCartCard';

class CheckOut extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            address2: '',
            country: '',
            countryState: '',
            zipCode: '',
            shippingAddress: '',
            useInfoForNextTime: '',
            paymentMethod: '',
            cardNumber: '',
            expiryDate: '',
            cvvNumber: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    render() {
        console.log('checkout State::::', this.state);
        return (
            <React.Fragment>
                <div className="checkout-container">
                    <div className="row">
                        <RightCartCard />
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Billing address</h4>
                            <form className="needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName">First name</label>
                                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="firstname" onChange={(e) => this.handleChange(e)} />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="last name" name="lastName" onChange={(e) => this.handleChange(e)} />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" name="email" onChange={(e) => this.handleChange(e)} />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" onChange={(e) => this.handleChange(e)} />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" name="address2" id="address2" placeholder="Apartment or suite" onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label htmlFor="country">Country</label>
                                        <select className="custom-select d-block w-100" id="country" name="country" onChange={(e) => this.handleChange(e)}>
                                            <option value>Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="state">State</label>
                                        <select className="custom-select d-block w-100" id="state" name="countryState" onChange={(e) => this.handleChange(e)}>
                                            <option value>Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" className="form-control" placeholder="zip code" id="zip" name="zipCode" onChange={(e) => this.handleChange(e)} required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="same-address" name="shippingAddress" onChange={(e) => this.handleChange(e)} />
                                    <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info" name="useInfoForNextTime" onChange={(e) => this.handleChange(e)} />
                                    <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                                </div>
                                <hr className="mb-4" />
                                <h4 className="mb-3">Payment</h4>
                                <div className="d-block my-3">
                                    <div className="custom-control custom-radio">
                                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" value="Credit Card"
                                            required onChange={(e) => this.handleChange(e)} />
                                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" value="Debit Card" required onChange={(e) => this.handleChange(e)} />
                                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" value="PayPal" required onChange={(e) => this.handleChange(e)} />
                                        <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="stripe" name="paymentMethod" type="radio" className="custom-control-input" value="Stripe" required onChange={(e) => this.handleChange(e)} />
                                        <label className="custom-control-label" htmlFor="stripe">Stripe</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-name">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="cardholder" required name="cardHolder" onChange={(e) => this.handleChange(e)} />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-number">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="Credit Card number" required name="cardNumber" onChange={(e) => this.handleChange(e)} />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="expiry date" required name="expiryDate" onChange={(e) => this.handleChange(e)} />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="cvvNumber" required name="cvvNumber" onChange={(e) => this.handleChange(e)} />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default CheckOut;