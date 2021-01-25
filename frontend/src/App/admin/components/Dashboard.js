import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../AppConstant';
import '../assets/css/dashboard.css';
import AsideBar from './AsideBar';
import DashboardFooter from './DashboardFooter';
import NavTop from './NavTop';

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
            render: false
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
                    render: true
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

        const options_to_products = {
            animationEnabled: true,
            title: {
                text: "Top Products"
            },
            subtitles: [{
                text: "71% Positive",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "Unsatisfied", y: 5 },
                    { name: "Very Unsatisfied", y: 31 },
                    { name: "Very Satisfied", y: 40 },
                    { name: "Satisfied", y: 17 },
                    { name: "Neutral", y: 7 }
                ]
            }]
        }

        const options_Orders = {
            title: {
                text: "System Orders"
            },
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: [
                        { label: "Apple", y: 10 },
                        { label: "Orange", y: 15 },
                        { label: "Banana", y: 25 },
                        { label: "Mango", y: 30 },
                        { label: "Grape", y: 28 }
                    ]
                }
            ]
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
                legendText: "{label}",
                toolTipContent: "{label}: <strong>{y}%</strong>",
                indexLabel: "{y}%",
                indexLabelPlacement: "inside",
                dataPoints: [
                    { y: 32, label: "Health" },
                    { y: 22, label: "Finance" },
                    { y: 15, label: "Education" },
                    { y: 19, label: "Career" },
                    { y: 5, label: "Family" },
                    { y: 7, label: "Real Estate" }
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
            return null;
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