import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {userLogin} from '../../redux/reducer/Auth/authActions';
// import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { Link, withRouter  } from 'react-router-dom';
import Logo from '../../assets/images/logo_main.png';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            rememberMe:'',
            errorMessage:'',
        }     
    }
     handleOnChange =(e)=>{
        this.setState({
            [e.target.name] :e.target.value
        })
    }

    handleLogin =async(e)=>{
        e.preventDefault();
        const {email,password} = this.state;

        if(email==='' && password ===''){
            this.setState({
                errorMessage:'Email and password is required!'
            })
            return false;
        }
        if(email ===''){
            this.setState({
                errorMessage:'Email is required!'
            })
            return false;
        }
        if(password ===''){
            this.setState({
                errorMessage:'Password is required!'
            })
            return false;
        }
        
        try {
            await this.props.UserLoginBtn(email,password);
           this.setState({
            errorMessage:''
        })
        } catch (error) {
            console.log('error:::',error);
        } 
        
    }

    componentDidUpdate() {
        if(this.props.authResponse.authToken){
            const decode = jwt_decode(this.props.authResponse.authToken);
            const {userType} = decode.user;

            if(userType && userType==='admin'){
                setTimeout(() => {
                     this.props.history.push('/admin/dashboard');
                  }, 100);
            }
        }
      }
    render() {        
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
                                       
                                        <div className="card-header">
                                        <center><Link to="/"><img src={Logo} alt="logo" style={{ height: '100px', width: '174px'}}/></Link></center>
                                            <h3 className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            {this.state.errorMessage? (
                                            <div className="alert alert-danger" style={{marginBottom:24}}>{this.state.errorMessage}</div>
                                            ):('')}
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

const mapStateToProps = (state)=>{
    return{
        authResponse:state.auth
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        UserLoginBtn :(email,password)=>dispatch(userLogin(email,password))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));