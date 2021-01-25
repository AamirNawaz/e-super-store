import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { userLogin } from '../../../redux/reducer/Auth/authActions';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: '',
            errorMessage: '',
        }
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        if (email === '' && password === '') {
            this.setState({
                errorMessage: 'Email and password is required!'
            })
            return false;
        }
        if (email === '') {
            this.setState({
                errorMessage: 'Email is required!'
            })
            return false;
        }
        if (password === '') {
            this.setState({
                errorMessage: 'Password is required!'
            })
            return false;
        }

        try {
            await this.props.UserLoginBtn(email, password);


        } catch (error) {
            console.log('error:::', error);
        }

    }
    componentDidUpdate() {
        if (this.props.auth.authToken) {
            const decode = jwt_decode(this.props.auth.authToken);
            const { userType } = decode.user;

            if (userType && userType === 'customer') {
                if (localStorage.getItem('RoutePath')) {
                    this.props.history.push('/check-out');
                } else {
                    this.props.history.push('/user/profile');
                }
            } else {
                this.props.history.push('/admin/dashboard');
            }
        }
    }

    render() {
        return (
            <React.Fragment>
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
                <section className="section-conten padding-y" style={{ minHeight: '84vh' }}>
                    <div className="card mx-auto" style={{ maxWidth: 380, marginTop: 100 }}>
                        <div className="card-body">
                            <h4 className="card-title mb-4">Sign in</h4>
                            {this.state.errorMessage ? (
                                <div className="alert alert-danger" style={{ marginBottom: 24 }}>{this.state.errorMessage}</div>
                            ) : ('')}
                            <form>
                                <div className="form-group">
                                    <input name="email" className="form-control" placeholder="Email" type="text" onChange={(e) => this.handleOnChange(e)} />
                                </div>
                                <div className="form-group">
                                    <input name="password" className="form-control" placeholder="Password" type="password" onChange={(e) => this.handleOnChange(e)} />
                                </div>
                                <div className="form-group">
                                    <Link to="/user/forgot-password" className="float-right">Forgot password?</Link>
                                    <label className="float-left custom-control custom-checkbox"> <input type="checkbox" name="rememberMe" onChange={(e) => this.handleOnChange(e)} className="custom-control-input" /> <div className="custom-control-label"> Remember </div> </label>
                                </div>
                                <div className="form-group">
                                    <button onClick={(event) => this.handleLogin(event)} disabled={this.props.auth.isLoading ? true : false} className="btn btn-primary btn-block">
                                        {this.props.auth.isLoading ? (
                                            <div className="spinner-border text-default" role="status">
                                                <center> <span className="sr-only">Loading...</span></center>
                                            </div>
                                        ) : (
                                                'Login '
                                            )}

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p className="text-center mt-4">Don't have account? <Link to="/user/register">Sign up</Link></p>
                    <br /><br />
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserLoginBtn: (email, password) => dispatch(userLogin(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserLogin));