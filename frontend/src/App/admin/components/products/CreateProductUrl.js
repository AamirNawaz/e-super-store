import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import { userLogout } from '../../../redux/reducer/Auth/authActions';
import { categories } from '../../../redux/reducer/categories/categoryActions';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';


class CreateProductUrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            category: '',
            manufacturer: '',
            details: '',
            image: '',
            price: '',
            sale: '',
            stock: '',
            status: '',
            size: '',
            qty: '',
            deliveryTime: '',
            guarantee: '',
            reviews: 'test',
            categoriesList: []
        }
    }

    componentDidMount = async () => {
        const authToken = this.props.auth;
        await this.props.fetchCategories(authToken);
        this.setState({
            categoriesList: this.props.categories
        })
        if (this.props.tokenExpire) {
            this.props.logoutCall();
            this.props.history.push('/admin/logout');
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSaveProduct = async (e) => {
        e.preventDefault();
        const { productName, category, manufacturer, deliveryTime, details, image, price, qty, sale, size, guarantee, reviews, status, stock } = this.state;
        // /static/media/7.3910c3dd.jpg
        if (productName && category && manufacturer && deliveryTime && details && image && price && qty && sale && size && guarantee && status && stock) {
            const data = {
                productName,
                category,
                manufacturer,
                deliveryTime,
                details, image, price, qty, sale, size, guarantee, reviews, status, stock
            }
            const response = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/products/addUrl`, data);
            if (response.status === 200) {
                toast.success('Product Created successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                })
                this.props.history.push('/admin/product-list');
            } else {
                toast.error('Failed to Created product!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                })
            }

        } else {
            toast.error('Product All Fields are mandatory!', {
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
                            <main>
                                <div className="container mt-5 w-75" >
                                    <h1>Create Product</h1>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Product Name</label>
                                                <input type="text" className="form-control" id="productName" name="productName" placeholder="Product Name" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Manufacturer</label>
                                                <input type="text" className="form-control" name="manufacturer" placeholder="Enter Company Name" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Quantity</label>
                                                <input type="text" className="form-control" name="qty" placeholder="Quantity" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Guarantee</label>
                                                <input type="text" className="form-control" name="guarantee" placeholder="Enter Company Name" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputState">Product Category</label>
                                                <select name="category" id="inputState" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    {this.state.categoriesList.map((category, index) => {
                                                        return (<option key={index} value={category._id}>{category.name}</option>);
                                                    })}

                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="">DeliveryTime</label>
                                                <input type="number" className="form-control" name="deliveryTime" placeholder="Enter Product Price" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-3">
                                                <label htmlFor="inputCity">Sale</label>
                                                <input type="text" className="form-control" name="sale" placeholder="sale" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label htmlFor="inputState">Product Stock</label>
                                                <select name="stock" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="inStock">In Stock</option>
                                                    <option value="outOfStock">Out Of Sock</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label>Status</label>
                                                <select name="status" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="active">Active</option>
                                                    <option value="inActive">In Active</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label>Prduct Size</label>
                                                <select name="size" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="small">Small</option>
                                                    <option value="large">Large</option>
                                                    <option value="extraLarge">Extra Large</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label htmlFor="inputImage">Price</label>
                                                <input type="text" name="price" className="form-control" placeholder="price" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputImage">Product Description</label>
                                                <textarea type="text" name="details" className="form-control" rows="3" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            {/* <div className="form-group col-md-12">
                                                <label htmlFor="inputImage">Product Image</label>
                                                <input type="file" name="productImage" onChange={(e) => this.handleChange(e)} />
                                            </div> */}
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputImage">product image</label>
                                                <input type="text" name="image" className="form-control" placeholder="product image" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={(e) => this.handleSaveProduct(e)}>Save Product</button>
                                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateProductUrl));