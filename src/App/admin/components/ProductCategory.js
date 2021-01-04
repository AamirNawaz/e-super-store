import React, { Component } from 'react'
import AsideBar from './AsideBar';
import DashboardFooter from './DashboardFooter';
import NavTop from './NavTop';
import axios from 'axios';
import Pagination from './Pagination';


class ProductCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            categoryName: '',
            productStatus: '',
            perPage: 2,
            start: 0,
            end: this.perPage


        }
    }
    changePagination = (startValue, endValue) => {
        this.setState({
            start: startValue,
            end: endValue
        })

    }
    getCategories = async () => {
        const categoriesList = await axios.get('http://localhost:9000/api/categories');
        const data = categoriesList.data.categories
        console.log(data)
        this.setState({
            categories: data
        })
    }
    componentDidMount() {
        this.getCategories()

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state)
    }

    render() {
        const { categories, start, end } = this.state
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
                                            <input type="text" className="form-control" id="productName" name="productCategory" placeholder="Product Category" onChange={(e) => this.handleChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputState">Status</label>
                                                <select name="categoryStatus" id="inputState" className="form-control" onChange={(e) => this.handleChange(e)}>
                                                    <option defaultValue>Choose...</option>
                                                    <option value="active">Active</option>
                                                    <option value="inActive">In-Active</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group ml-2">
                                            <button type="submit" className="btn btn-primary">Save</button>

                                        </div>
                                    </form>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Edit | Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                categories.slice(start, end).map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.status}</td>
                                                        <td>
                                                            <button className="btn btn-success">Edit</button>
                                                            {` `}
                                                            |
                                                            {` `}
                                                            <button className="btn btn-danger">Delete</button>

                                                        </td>
                                                    </tr>
                                                ))
                                            }



                                        </tbody>
                                    </table>
                                    <Pagination perPage={this.state.perPage} changePagination={this.changePagination} totalCategories={categories.length} />
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