import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {userLogin} from '../../redux/reducer/Auth/authActions';
// import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            rememberMe:''
        }     
    }
     handleOnChange =(e)=>{
        this.setState({
            [e.target.name] :e.target.value
        })
    }

    handleLogin =(e)=>{
        e.preventDefault();
        const {email,password} = this.state;
        this.props.UserLoginBtn(email,password);
    }
    render() {
        const authToken  =localStorage.getItem('authToken');
        const isLoggedIn  =localStorage.getItem('isLoggedIn');
        if(authToken && isLoggedIn){
            return <Redirect to="/admin/dashboard" />
        }else{
         return (<React.Fragment>
             <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            {/* {this.props.authResponse.isLoggedIn===false ? (
                                            <div className="alert alert-danger" style={{marginBottom:24}}>{this.props.authResponse.message}</div>
                                            ):('')} */}
                                            <form>
                                                <div className="form-group">
                                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                    <input className="form-control py-4" name="email" id="inputEmailAddress" type="email" placeholder="Enter email address" onChange={(e)=>this.handleOnChange(e)} />
                                                </div>
                                                <div className="form-group">
                                                    <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                    <input className="form-control py-4" name="password" id="inputPassword" type="password" placeholder="Enter password" onChange={(e)=>this.handleOnChange(e)} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" name="rememberMe" id="rememberPasswordCheck" type="checkbox" onChange={(e)=>this.handleOnChange(e)} />
                                                        <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                                                    </div>
                                                </div>
                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="password.html">Forgot Password?</a>
                                                    <button onClick={(event)=>this.handleLogin(event)}className="btn btn-primary">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright © Your Website 2020</div>
                                <div>
                                    <a href="/">Privacy Policy</a>
            ·
            <a href="/">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </React.Fragment>);
        }
    }
}

const mapStateToProps = (state)=>{
    console.log('stateeeee::::',state);
    return{
        authResponse:state.auth
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        UserLoginBtn :(email,password,rememberMe)=>dispatch(userLogin(email,password,rememberMe))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);