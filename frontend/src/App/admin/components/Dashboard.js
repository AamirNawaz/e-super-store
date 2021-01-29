import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../AppConstant';
import '../assets/css/dashboard.css';
import AsideBar from './AsideBar';
import DashboardFooter from './DashboardFooter';
import NavTop from './NavTop';
import preloader from '../../../../src/App/assets/images/preloader.gif';
import CanvasJSReact from '../assets/js/canvasjs.react';
import { userLogout } from '../../redux/reducer/Auth/authActions';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesCount: 0,
            productsCount: 0,
            usersCount: 0,
            ordersCount: 0,
            render: false,
            categories: [],
            orders: [],
            products: []
        }
    }

    componentDidMount = () => {
        // if (!this.props.auth.authToken) {
        //     this.props.history.push('/admin/login');
        // }
        this.getAllCountes();
    }

    getAllCountes = async () => {
        try {
            const authToken = this.props.auth.authToken;
            const response = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/dashboardCounters`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                }
            });

            if (response.status === 200) {
                this.setState({
                    categoriesCount: response.data.categoriesCount,
                    ordersCount: response.data.ordersCount,
                    productsCount: response.data.productsCount,
                    usersCount: response.data.usersCount,
                    render: true,
                    orders: response.data.orders,
                    categories: response.data.categories,
                    products: response.data.products

                })
            }
        } catch (error) {
            // console.log(error.message);
            //get logout beacuse jwt token expires
            await this.setState({
                render: false
            })
            this.props.logoutCall();
            this.props.history.push('/admin/logout');
        }

    }
    render() {
        const { categories, products, orders } = this.state;

        // categories graph data
        const activeCategories = (categories && categories.filter((active) => active.status === 'active').length);
        const InActiveCategories = (categories && categories.filter((active) => active.status === 'inActive').length);

        // products graph data
        const activeProducts = (products && products.filter((active) => active.status === 'active').length);
        const InActiveProducts = (products && products.filter((active) => active.status === 'inActive').length);
        const InStockProducts = (products && products.filter((active) => active.stock === 'inStock').length);
        const outStockProducts = (products && products.filter((active) => active.stock === 'outOfStock').length);

        // order graph data 
        const pendingOrders = (orders && orders.filter((order) => order.orderStatus === 'pending').length);
        const InProcessOrders = (orders && orders.filter((order) => order.orderStatus === 'inprocess').length);
        const deliveredOrders = (orders && orders.filter((order) => order.orderStatus === 'delivered').length);
        const rejectedOrders = (orders && orders.filter((order) => order.orderStatus === 'rejected').length);

        const options_Orders = {
            title: {
                text: "System Orders"
            },
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: [
                        { label: "Pending order", y: pendingOrders ? pendingOrders : 0 },
                        { label: "Inprocess order", y: InProcessOrders ? InProcessOrders : 0 },
                        { label: "Deliverd order", y: deliveredOrders ? deliveredOrders : 0 },
                        { label: "Rejected order", y: rejectedOrders ? rejectedOrders : 0 },

                    ]
                }
            ]
        }

        const options_to_products = {
            animationEnabled: true,
            title: {
                text: "Top Products"
            },
            subtitles: [{
                text: (((activeProducts + InActiveProducts + InStockProducts + outStockProducts) / 400) * 100).toFixed(0) + "% Positive",
                verticalAlign: "center",
                fontSize: 20,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "Active", y: activeProducts ? activeProducts : 0 },
                    { name: "Inactive", y: InActiveProducts ? InActiveProducts : 0 },
                    { name: "InStock", y: InStockProducts ? InStockProducts : 0 },
                    { name: "outStock", y: outStockProducts ? outStockProducts : 0 },

                ]
            }]
        }



        const options_toCategories = {
            theme: "light",
            animationEnabled: true,
            exportFileName: "to_categories",
            exportEnabled: true,
            title: {
                text: "Top Categories "
            },
            data: [{
                type: "pie",
                showInLegend: true,
                legendText: "{label} : {y}",
                toolTipContent: "{label}: <strong>{y}%</strong>",
                indexLabel: "{label}:{y}",
                indexLabelPlacement: "inside",
                dataPoints: [
                    { y: activeCategories ? activeCategories : 0, label: "Active" },
                    { y: InActiveCategories ? InActiveCategories : 0, label: "InActive" },
                    // { y: 15, label: "Popular" },
                ]
            }]
        }
        if (this.state.render) {
            return (<React.Fragment>

                <div>
                    <NavTop />
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <AsideBar />
                        </div>
                        <div id="layoutSidenav_content">
                            <div className="row w-100 mt-5">
                                <div className="col-md-3">
                                    <div className="card border-info mx-sm-1 p-3">
                                        <div className="card border-info shadow text-info p-3 my-card"><span className="fa fa-shopping-cart fa-2x" aria-hidden="true" /></div>
                                        <div className="text-info text-center mt-3"><h4>Orders</h4></div>
                                        <div className="text-info text-center mt-2"><h1>{this.state.ordersCount}</h1></div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card border-success mx-sm-1 p-3">
                                        <div className="card border-success shadow text-success p-3 my-card"><span className="fas fa-columns fa-2x" aria-hidden="true" /></div>
                                        <div className="text-success text-center mt-3"><h4>Products</h4></div>
                                        <div className="text-success text-center mt-2"><h1>{this.state.productsCount}</h1></div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card border-danger mx-sm-1 p-3">
                                        <div className="card border-danger shadow text-danger p-3 my-card"><span className="fas fa-list fa-2x" aria-hidden="true" /></div>
                                        <div className="text-danger text-center mt-3"><h4>Categories</h4></div>
                                        <div className="text-danger text-center mt-2"><h1>{this.state.categoriesCount}</h1></div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card border-warning mx-sm-1 p-3">
                                        <div className="card border-warning shadow text-warning p-3 my-card"><span className="fa fa-users fa-2x" aria-hidden="true" /></div>
                                        <div className="text-warning text-center mt-3"><h4>Users</h4></div>
                                        <div className="text-warning text-center mt-2"><h1>{this.state.usersCount}</h1></div>
                                    </div>
                                </div>
                            </div>

                            <div id="layoutSidenav_content mt-4" style={{ paddingLeft: '11px', paddingRight: '11px' }}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <CanvasJSChart options={options_Orders} />
                                    </div>
                                    <div className="col-md-3 offset-md-1  ">
                                        <CanvasJSChart options={options_toCategories} />
                                    </div>
                                    <div className="col-md-3">
                                        <CanvasJSChart options={options_to_products} />
                                    </div>
                                </div>
                            </div>

                            <DashboardFooter />
                        </div>
                    </div>
                </div>


            </React.Fragment>);
        } else {
            return <div style={{ marginTop: '200px', marginLeft: '680px' }}>
                <img src={preloader} alt=""></img><br /> &nbsp;&nbsp;&nbsp;&nbsp;Please wait....</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutCall: () => dispatch(userLogout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));