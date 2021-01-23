import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import paginate from '../../../helper/paginate';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import Pagination from '../../../helper/Pagination';
import { connect } from 'react-redux';

class OrdersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            pageSize: 8,
            currentPage: 1,
            orders: [],
        }
    }
    componentDidMount = () => {
        this.getAllOrders();
    }
    getAllOrders = async () => {
        const orders = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/orders`);
        if (orders.data.orders.length) {
            this.setState({
                orders: orders.data.orders
            })
        }
    }
    handlePageChange = (page) => {
        this.setState({
            currentPage: page,
        })
    }

    handleNext = (event) => {
        const pagesCount = Math.ceil(this.props.products.length / this.state.pageSize);
        if (this.state.currentPage < pagesCount)
            this.setState({
                currentPage: this.state.currentPage + 1
            });
    }

    handlePrevious = (event) => {
        if (this.state.currentPage > 1)
            this.setState({
                currentPage: this.state.currentPage - 1,
            });
    }


    handleDeleteOrder = async (orderId) => {
        const authToken = this.props.auth.authToken;
        const response = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/orders/delete/${orderId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        }
        );

        if (response.status === 200) {
            toast.success('Order deleted successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })

            this.getAllOrders();

        } else {
            toast.error('Faild to delete the Order', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }
    }

    handleOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        let totalCount = 0;
        const { searchInput, currentPage, pageSize } = this.state;
        const { orders: allOrders } = this.state;
        const ordersData = this.state.searchInput ? allOrders.filter(data => data.productName === searchInput) : allOrders.reverse();
        const orders = paginate(ordersData, currentPage, pageSize);


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
                            <main style={{ margin: '20px' }}>
                                <h1>Customer Orders</h1>
                                {/* Search filter */}
                                <div className="row mb-2" >
                                    <div className="col-md-3 offset-md-9">
                                        <div className="form-group has-search">
                                            <span className="fa fa-search form-control-feedback" />
                                            <input style={{ borderRadius: '0px', border: '2px solid #ff6a00' }} name="searchInput" type="text" className="form-control" placeholder={'search products'} onChange={(event) => this.handleOnchange(event)} autoComplete="off" />
                                        </div>

                                    </div>
                                </div>
                                {/* Search filter */}

                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">order status</th>
                                            <th scope="col">Payment status</th>
                                            <th scope="col">Order items</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders && orders.length ? (
                                                orders.map((order, index) => {
                                                    totalCount = (currentPage - 1) * pageSize + index + 1;
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                                                            <td>{order.userId && order.userId !== null ? order.userId.name : ''}</td>
                                                            <td>${order.totalPrice}</td>
                                                            <td>{order.orderStatus}</td>

                                                            <td><span className={order.paymentStatus === 'paid' ? 'badge badge-success' : 'badge badge-danger'}>{order.paymentStatus}</span></td>
                                                            <td><Link to={`/admin/order-details/${order._id}`} className="btn btn-primary btn-sm">view</Link></td>
                                                            <td><i className="fas fa-edit" style={{ cursor: 'pointer', color: 'blue' }}> </i>&nbsp;&nbsp;|
                                                                <Link to="/admin/orders-list" onClick={() => this.handleDeleteOrder(order._id)} style={{ cursor: 'pointer', color: 'red' }}><i className="fas fa-trash-alt" /></Link></td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                    <tr><td>No Record found.</td></tr>
                                                )}


                                    </tbody>
                                </table>
                                <Pagination
                                    recordCount={this.state.orders && this.state.orders.length ? this.state.orders.length : 0}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={this.handlePageChange}
                                    NextPage={this.handleNext}
                                    PreviousPage={this.handlePrevious}
                                    colSpan={7}
                                    Url="/admin/orders-list"
                                    totalCount={totalCount}
                                />

                            </main>
                            <DashboardFooter />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps)(OrdersList);