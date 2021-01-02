import React, { Component } from 'react'
import AsideBar from './AsideBar';
import DashboardFooter from './DashboardFooter';
import NavTop from './NavTop';


class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            companyName: '',
            productCategory: '',
            productPrice: '',
            productSale: '',
            productStock: '',
            productStatus: '',
            productSize: '',
            productImage: '',


        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
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
                                                <label htmlFor="inputPassword4">Company Name</label>
                                                <input type="text" className="form-control" id="inputPassword4" name="companyName" placeholder="Enter Company Name" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputState">Product Category</label>
                                                <select name="productCategory" id="inputState" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="shoes">Shoes</option>
                                                    <option value="shirts">Shirts</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="">Product Price</label>
                                                <input type="number" className="form-control" id="inputAddress2" name="productPrice" placeholder="Enter Product Price" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputCity">Sale</label>
                                                <input type="text" className="form-control" name="productSale" id="inputCity" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="inputState">Stock</label>
                                                <select id="inputState" name="productStock" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="inStock">In Stock</option>
                                                    <option value="outOfSock">Out Of Sock</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label htmlFor="inputStatus">Status</label>
                                                <select id="inputStatus" name="productStatus" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="active">Active</option>
                                                    <option value="inActive">In Active</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-2">
                                                <label htmlFor="inputStatus">Prduct Size</label>
                                                <select id="inputSize" name="productSize" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="small">Small</option>
                                                    <option value="large">Large</option>
                                                    <option value="extraLarge">Extra Large</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="inputImage">Product Image</label>
                                                <input type="file" name="productImage" className="imageInput" onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save</button>
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

export default CreateProduct;