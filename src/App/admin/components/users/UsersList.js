import axios from 'axios';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import {API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV} from '../../../AppConstant';
import { Link } from 'react-router-dom';
class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[]
         }
    }

    componentDidMount =() =>{
        this.getUsers();
    }
    
    getUsers =async()=>{

    const token =this.props.auth.authToken;
    const response = await axios.get(`${REACT_APP_ENV=== 'Development'? DEV_API_END_POINT:API_END_POINT}/users`,{headers: {
        'Authorization': `Bearer ${token}` 
      }}
      );
      this.setState({
          users:response.data.users
      })

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
                            <h1>System Users</h1>
                                        <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">User Type</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users && this.state.users.length ?(
                                this.state.users.map((user,index)=>{
                                    return (
                                    <tr key={index}>
                                    <th scope="row">{index +1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.status}</td>
                                    <td>{user.userType}</td>
                                    <td>Edit | Delete</td>
                                    </tr>
                                    )
                                })
                            ):(
                            <tr><td>No Record found.</td></tr>
                            )}
                            
                                <tr>
                                    <td>Showing 5 out {this.state.users.length}</td>
                           <td colSpan="5">
                                <nav aria-label="Page navigation example" style={{float:'right'}}>
                                <ul className="pagination">
                                    <li className="page-item"><Link className="page-link" to="/admin/users">Previous</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="/admin/users">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/admin/users">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/admin/users">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/admin/users">Next</Link></li>
                                </ul>
                                </nav>
                                </td>
                              
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

const mapStateToProps =(state)=>{
return {
    auth:state.auth
}
}
 
export default connect(mapStateToProps,null)(UsersList);