import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV, NODE_IMAGES_PATH, DEV_NODE_IMAGES_PATH } from '../../../AppConstant';
import paginate from '../../../helper/paginate';
import { fetchProducts } from '../../../redux/reducer/shope/shopeActions';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import Pagination from '../../../helper/Pagination';
import PaginationSearch from '../../../helper/PaginationSearch';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            pageSize: 5,
            currentPage: 1,
        }
    }
    componentDidMount = () => {
        this.props.fetchProductsCall();
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


    handleDeleteProduct = async (productID) => {
        const authToken = this.props.auth;
        const response = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/products/delete/${productID}`, {
            // headers: {
            //     'Authorization': `Bearer ${authToken}`,
            // }
        }
        );

        console.log('response:::', response);
        if (response.status === 200) {
            toast.success('Product deleted successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })

            //fetch all categories data on save
            this.props.fetchProductsCall(authToken);

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

    handleOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        let totalCount = 0;
        const { searchInput, currentPage, pageSize } = this.state;
        const { products: allProducts } = this.props;
        const productsData = this.state.searchInput ? allProducts.filter(data => data.productName === searchInput) : allProducts.reverse();
        const products = paginate(productsData, currentPage, pageSize);


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
                                <div className="table-responsive" >
                                    <h1>Product List</h1>
                                    {/* Search filter */}
                                    <div className="row mb-2" >
                                        {/* product save with image */}
                                        {/* <PaginationSearch link="/admin/create-product" addBtn="Add Product" ></PaginationSearch> */}

                                        {/* product save with image url */}
                                        <PaginationSearch link="/admin/create-product-url" addBtn="Add Product" ></PaginationSearch>

                                        <div className="col-md-3 offset-md-6">
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
                                                <th scope="col">Name</th>
                                                <th scope="col">image</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">stock</th>
                                                <th scope="col">status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products && products.length ? (
                                                    products.map((product, index) => {
                                                        totalCount = (currentPage - 1) * pageSize + index + 1;
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                                                                <td>{product.productName}</td>
                                                                <td><img src={REACT_APP_ENV === 'Development' ? DEV_NODE_IMAGES_PATH + `${product.image}` : NODE_IMAGES_PATH + `${product.image}`} style={{ width: 60, height: 50, borderRadius: 5 }} alt="" /></td>


                                                                <td>${product.price}</td>
                                                                <td>{product.qty}</td>
                                                                <td>{product.status}</td>
                                                                <td>{product.stock}</td>
                                                                <td><i className="fas fa-edit" style={{ cursor: 'pointer', color: 'blue' }}> </i>&nbsp;&nbsp;|
                                                                <Link to="/admin/product-list" onClick={() => this.handleDeleteProduct(product._id)} style={{ cursor: 'pointer', color: 'red' }}><i className="fas fa-trash-alt" /></Link></td>
                                                            </tr>
                                                        )
                                                    })
                                                ) : (
                                                        <tr><td>No Record found.</td></tr>
                                                    )}


                                        </tbody>
                                    </table>
                                    <Pagination
                                        recordCount={this.props.products && this.props.products.length ? this.props.products.length : 0}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={this.handlePageChange}
                                        NextPage={this.handleNext}
                                        PreviousPage={this.handlePrevious}
                                        colSpan={7}
                                        Url="/admin/product-list"
                                        totalCount={totalCount}
                                    />
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
        products: state.shope.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsCall: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);