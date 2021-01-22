import React from 'react';
import { Link, useParams } from 'react-router-dom';

function OrderPlaced() {
    const { orderID } = useParams();
    return (
        <React.Fragment>
            <div className="jumbotron text-center">
                <h1 className="display-3">Thank You!</h1>
                <p className="lead">
                    Your Order Id: <strong>{orderID}</strong><br />
                    Please keep it safe ,it will help you in upcomming step if you need any assistance regardign order.</p>
                <hr />
                <p>
                    Having trouble? <Link to="/help">Contact us</Link>
                </p>
                <p className="lead">
                    <Link className="btn btn-primary btn-sm" to="/" role="button">Continue to homepage</Link>
                </p>
            </div>

        </React.Fragment>
    )
}

export default OrderPlaced;