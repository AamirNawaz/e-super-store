import axios from 'axios';
import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderItemsData: []
        }
    }

    componentDidMount = () => {
        this.getOrderItemsById();
    }
    getOrderItemsById = async () => {
        const { orderId } = this.props.match.params;
        const orders = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/orders/${orderId}`);
        const { orderItems } = orders.data.order;
        console.log('orderItems::::', orderItems);

        if (orderItems && orderItems.length) {
            this.setState({
                orderItemsData: orderItems
            })
        }

    }
    render() {
        const { orderItemsData } = this.state;
        const { orderId } = this.props.match.params;
        let grandTotal = 0;
        const shippingCharges = 15;
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
                <div>
                    <NavTop />
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <AsideBar />
                        </div>
                        <div id="layoutSidenav_content">

                            <div className="container" style={{ maxWidth: '1145px', marginTop: '50px' }}>

                                <div className="row">


                                    <div className="col-xs-12">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/admin/dashboard"><i className="fas fa-home" /></Link></li>
                                                <li className="breadcrumb-item"><Link to="/admin/orders-list">Orders</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Order Details</li>
                                            </ol>
                                        </nav>
                                        <div className="invoice-title mt-5">
                                            <h3 className="pull-right">Order ID # <small>{orderId}</small> </h3>
                                            <h3 className="pull-right">Payment Status :<small className="btn btn-success btn-sm">Paid</small> </h3>
                                        </div>
                                        <hr />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h3 className="panel-title"><strong>Order summary</strong></h3>
                                            </div>
                                            <div className="panel-body">
                                                <div className="table-responsive">
                                                    <table className="table table-condensed">
                                                        <thead>
                                                            <tr>
                                                                <td><strong>Item</strong></td>
                                                                <td className="text-center"><strong>Price</strong></td>
                                                                <td className="text-center"><strong>Quantity</strong></td>
                                                                <td className="text-right"><strong>Totals</strong></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {orderItemsData && orderItemsData.length ? (
                                                                orderItemsData.map((item, index) => {
                                                                    grandTotal = grandTotal + (item.price * item.qty);
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td>{item.name}</td>
                                                                            <td className="text-center">${item.price}</td>
                                                                            <td className="text-center">{item.qty}</td>
                                                                            <td className="text-right">${item.price * item.qty}</td>
                                                                        </tr>
                                                                    )
                                                                })) : (
                                                                    <tr><td>No Record found.</td></tr>
                                                                )}

                                                            <tr>
                                                                <td className="no-line" />
                                                                <td className="no-line" />
                                                                <td className="no-line text-center"><strong>Shipping</strong></td>
                                                                <td className="no-line text-right">${shippingCharges}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="no-line" />
                                                                <td className="no-line" />
                                                                <td className="no-line text-center"><strong>Total</strong></td>
                                                                <td className="no-line text-right">${grandTotal - shippingCharges}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <DashboardFooter />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default withRouter(OrderDetails);
