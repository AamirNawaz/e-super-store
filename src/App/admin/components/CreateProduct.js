import React, { Component } from 'react'
import AsideBar from './AsideBar';
import DashboardFooter from './DashboardFooter';
import NavTop from './NavTop';


class CreateProduct extends Component {
    state = {

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
                                    <h1>Creae Product</h1>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Product ID</label>
                                                <input type="number" className="form-control" id="inputEmail4" placeholder="Enter Product Id" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Product Name</label>
                                                <input type="text" className="form-control" id="inputPassword4" placeholder="Product Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress">Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress2">Address 2</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputCity">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="inputState">State</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label htmlFor="inputZip">Zip</label>
                                                <input type="text" className="form-control" id="inputZip" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    Check me out
</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
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