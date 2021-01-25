import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import Pagination from '../../../helper/Pagination';
import PaginationSearch from '../../../helper/PaginationSearch';
import { toast, ToastContainer } from 'react-toastify';
import { userLogout } from '../../../redux/reducer/Auth/authActions';
import { Link, withRouter } from 'react-router-dom';
import paginate from '../../../helper/paginate';
class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchInput: '',
            pageSize: 5,
            currentPage: 1
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

    handleOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

    handleNext = (event) => {
        const pagesCount = Math.ceil(this.state.users.length / this.state.pageSize);
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


    handleDeleteUser = async (userId) => {
        const authToken = this.props.auth.authToken;
        const response = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/users/delete/${userId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        }
        );

        if (response.status === 200) {
            toast.success('User Deleted successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })

            //fetch all user data 
            this.getUsers();

        } else {
            toast.error('Faild to delete the User', {
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

    render() {
        let totalCount = 0;
        const { searchInput, currentPage, pageSize, users: allUsers } = this.state;
        const userData = searchInput ? allUsers.filter(data => data.name === searchInput) : allUsers;
        const users = paginate(userData, currentPage, pageSize);

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

                                    {/* Search filter */}
                                    <div className="row mb-2" >
                                        <PaginationSearch placeholder="Search User" />
                                        <div className="col-md-3 offset-md-6">
                                            <div className="form-group has-search">
                                                <span className="fa fa-search form-control-feedback" />
                                                <input style={{ borderRadius: '0px', border: '2px solid #ff6a00' }} name="searchInput" type="text" className="form-control" placeholder={'Search User'} onChange={(event) => this.handleOnchange(event)} autoComplete="off" />
                                            </div>

                                        </div>
                                    </div>
                                    {/* Search filter */}

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
                                            {users && users.length ? (
                                                users.map((user, index) => {
                                                    totalCount = (currentPage - 1) * pageSize + index + 1;
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.status}</td>
                                                            <td>{user.userType}</td>
                                                            <td>Edit | <Link to="/admin/users" onClick={() => this.handleDeleteUser(user._id)} style={{ cursor: 'pointer', color: 'red' }}><i className="fas fa-trash-alt" /></Link></td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                    <tr><td>No Record found.</td></tr>
                                                )}


                                        </tbody>
                                    </table>
                                    <Pagination recordCount={allUsers && allUsers.length ? allUsers.length : 0}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={this.handlePageChange}
                                        NextPage={this.handleNext}
                                        PreviousPage={this.handlePrevious}
                                        colSpan={5}
                                        Url="/admin/users"
                                        totalCount={totalCount} />

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