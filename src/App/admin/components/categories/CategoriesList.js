
import React, { Component } from 'react';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import Pagination from '../Pagination';
import PaginationSearch from '../PaginationSearch';
import CreateCategory from './CreateCategory';
import { ToastContainer } from 'react-toastify';
class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount = () => {

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
                            <CreateCategory />

                            <main style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '180px' }}>

                                <div className="table-responsive">
                                    <h3>Categoreis List</h3>
                                    <PaginationSearch placeholder="Search User" />
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
                                            {this.state.users && this.state.users.length ? (
                                                this.state.users.map((user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>acbc</td>
                                                            <td>active</td>
                                                            <td>Edit | Delete</td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                    <tr><td>No Record found.</td></tr>
                                                )}

                                            <Pagination RecordCount={this.state.users.length} colSpan={5} />


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



export default CategoriesList;