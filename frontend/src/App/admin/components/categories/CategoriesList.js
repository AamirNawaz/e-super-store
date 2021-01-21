
import React, { Component } from 'react';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import Pagination from '../../../helper/Pagination';
import PaginationSearch from '../../../helper/PaginationSearch';
import paginate from '../../../helper/paginate';
import { toast, ToastContainer } from 'react-toastify';
import { userLogout } from '../../../redux/reducer/Auth/authActions';
import { categories } from '../../../redux/reducer/categories/categoryActions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import CreateCategoryModel from './CreateCategoryModel';
import EditCategoryModel from './EditCategoryModel';

import '../../assets/css/search.css';


class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            open: false,
            pageSize: 5,
            currentPage: 1
        }
    }

    componentDidMount = async () => {
        const authToken = this.props.auth;
        await this.props.fetchCategories(authToken);
        if (this.props.tokenExpire) {
            this.props.logoutCall();
            this.props.history.push('/admin/logout');
        }
    }

    handleDeleteCategory = async (categoryID) => {
        const authToken = this.props.auth;
        const response = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/categories/delete/${categoryID}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        }
        );

        if (response.status === 200) {
            toast.success('Category Deleted successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })

            //fetch all categories data on save
            this.props.fetchCategories(authToken);

        } else {
            toast.error('Faild to delete the category', {
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

    OpenModel = () => {
        this.setState({
            open: !this.state.open
        });
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
        const pagesCount = Math.ceil(this.props.categories.length / this.state.pageSize);
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
    render() {
        let totalCount = 0;
        const { searchInput, currentPage, pageSize, open } = this.state;
        const { categories: allCategories } = this.props;
        const categoriesData = this.state.searchInput ? allCategories.filter(data => data.name === searchInput) : allCategories;
        const categories = paginate(categoriesData, currentPage, pageSize);

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
                            <main style={{ marginLeft: '20px', marginRight: '20px', marginTop: '55px' }}>
                                <div>
                                    <h3>Categoreis List</h3>
                                    {/* Search filter */}
                                    <div className="row mb-2" >
                                        <PaginationSearch onClick={() => this.OpenModel()} placeholder="Search User" add="" >ADD Category</PaginationSearch>
                                        <div className="col-md-3 offset-md-6">
                                            <div className="form-group has-search">
                                                <span className="fa fa-search form-control-feedback" />
                                                <input style={{ borderRadius: '0px', border: '2px solid #ff6a00' }} name="searchInput" type="text" className="form-control" placeholder={'Search category'} onChange={(event) => this.handleOnchange(event)} autoComplete="off" />
                                            </div>

                                        </div>
                                    </div>
                                    {/* Search filter */}
                                    {/* Open Model */}
                                    <CreateCategoryModel open={open} OpenModel={() => this.OpenModel()} />
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">SrNo</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories && categories.length ? (
                                                categories.map((category, index) => {
                                                    totalCount = (currentPage - 1) * pageSize + index + 1;
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                                                            <td>{category.name}</td>
                                                            <td>{category.status}</td>
                                                            <td>
                                                                <EditCategoryModel categoryID={category._id} ><i className="fas fa-edit" style={{ cursor: 'pointer', color: 'blue' }}> </i></EditCategoryModel>
                                                                &nbsp;&nbsp;| <Link to="/admin/categories-list" onClick={() => this.handleDeleteCategory(category._id)} style={{ cursor: 'pointer', color: 'red' }}><i className="fas fa-trash-alt" /></Link></td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                    <tr><td>No Record found.</td></tr>
                                                )}

                                        </tbody>
                                    </table>
                                    <Pagination recordCount={this.props.categories && this.props.categories.length ? this.props.categories.length : 0}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={this.handlePageChange}
                                        NextPage={this.handleNext}
                                        PreviousPage={this.handlePrevious}
                                        colSpan={3}
                                        Url="/admin/categories-list"
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
        categories: state.categoryReducer.categories,
        tokenExpire: state.categoryReducer.tokenExpireMessage ? state.categoryReducer.tokenExpireMessage : false,
        auth: state.auth.authToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (authToken) => dispatch(categories(authToken)),
        logoutCall: () => dispatch(userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoriesList));