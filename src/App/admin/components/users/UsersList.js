import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import Pagination from '../Pagination';
import PaginationSearch from '../PaginationSearch';
import { toast, ToastContainer } from 'react-toastify';
import { userLogout } from '../../../redux/reducer/Auth/authActions';
import { withRouter } from 'react-router-dom';
class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        this.getUsers();
    }

    getUsers = async () => {
        try {
            const token = this.props.auth.authToken;
            const response = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            );
            this.setState({
                users: response.data.users
            })


        } catch (error) {
            if (error.response.data) {
                const message = error.response.data ? error.response.data : 'Backend Service Stop';
                toast.error(message, {
                    position: "top-right",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });

                //get logout beacuse jwt token expires
                this.props.logoutCall();
                this.props.history.push('/admin/logout');
            }

        }
    }
    render() {
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
                                <div className="table-responsive">
                                    <h1>System Users</h1>
                                    <PaginationSearch placeholder="Search User" />
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">SrNo</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">User Type</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.users && this.state.users.length ? (
                                                this.state.users.map((user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.status}</td>
                                                            <td>{user.userType}</td>
                                                            <td>Edit | Delete</td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                    <tr><td>No Record found.</td></tr>
                                                )}

                                            <Pagination RecordCount={this.state.users.length} colSpan={5} />


                                        </tbody>
                                    </table>

                                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        logoutCall: () => dispatch(userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UsersList));