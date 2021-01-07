import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from '../../../redux/reducer/shope/shopeActions';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import Pagination from '../Pagination';
import PaginationSearch from '../PaginationSearch';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    componentDidMount = () => {
        this.props.fetchProductsCall();
    }

    render() { 
        const products = this.props.productsData;
        return ( 
        <React.Fragment>
        <div>
            <NavTop />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <AsideBar />
                </div>
                <div id="layoutSidenav_content">
                    
                    <main style={{margin: '20px'}}>
                        <div className="table-responsive" >
                            <h1>Product List</h1>
                        <PaginationSearch addBtn="Add Product" link="/admin/create-product" placeholder="Search product" />
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

                        {products && products.length ?(
                                        products.map((product,index)=>{
                                            return (
                                                <tr key={index}>
                                                <th scope="row">{index +1}</th>
                                                <td>{product.productName}</td>
                                                <td><img src={product.image} style={{width:50,height:50}} alt=""/></td>
                                                <td>${product.price}</td>
                                                <td>{product.qty}</td>
                                                <td>{product.status}</td>
                                                <td>{product.stock}</td>
                                                <td>Edit | Delete</td>
                                                </tr>
                                            )
                                        })
                                    ):(
                                    <tr><td>No Record found.</td></tr>
                                    )}
                                    
                                    <Pagination RecordCount={products.length} colSpan={7} />                    
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

const mapStateToProps =(state)=>{
    return {
        productsData:state.shope.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsCall: () => dispatch(fetchProducts())
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);