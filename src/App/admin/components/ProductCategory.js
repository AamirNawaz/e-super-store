import React, { Component } from 'react'
import AsideBar from './AsideBar';
import DashboardFooter from './DashboardFooter';
import NavTop from './NavTop';


class ProductCategory extends Component {
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
                                    <h1>Product Category</h1>
                                    <form>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Category Name</label>
                                            <input type="text" className="form-control" id="productName" name="productName" placeholder="Product Name" onChange={(e) => this.handleChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputState">Product Category</label>
                                                <select name="productCategory" id="inputState" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="shoes">Shoes</option>
                                                    <option value="shirts">Shirts</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group ml-2">
                                            <button type="submit" className="btn btn-primary">Save</button>

                                        </div>
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

export default ProductCategory;