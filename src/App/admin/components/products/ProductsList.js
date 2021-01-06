import React, { Component } from 'react';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                <table className="table">
                <thead classname="thead-dark">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>CAT works</td>
                    <td>imge</td>
                    <td>$450</td>
                    <td>56</td>
                    <td>Edit | Delete</td>
                    </tr>
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
 
export default ProductList;