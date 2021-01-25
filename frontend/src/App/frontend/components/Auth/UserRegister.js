import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { userSignup } from '../../../redux/reducer/Auth/authActions';
class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lname: '',
            email: '',
            username: '',
            gender: '',
            city: '',
            country: '',
            password: '',
            confirmPassword: '',
            termsAndCondition: ''
        }
    }


    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup = async (e) => {
        e.preventDefault();
        const { name, lname, email, username, gender, city, country, password, confirmPassword, termsAndCondition } = this.state;

        if (name === '' && email === '' && username === '' && password === '' && confirmPassword === '' && city === '' && country === '' && gender === '' && termsAndCondition === '') {
            this.setState({
                nameError: 'Name is required',
                emailError: 'email is required',
                passwordError: 'password is required',
                confirmPasswordError: 'confirm password is required',
                cityError: 'city is required',
                countryError: 'country is required',
                genderError: 'gender is required',
                termsAndConditionError: 'terms and codition is required'
            })
            return false;
        }

        if (name === '') {
            this.setState({
                nameError: 'Name is required',
            })
            return false;
        } else {
            this.setState({
                nameError: '',
            })
        }

        if (email === '') {
            this.setState({
                emailError: 'email is required',
            })
            return false;
        } else {
            this.setState({
                emailError: '',
            })
        }

        if (username === '') {
            this.setState({
                usernameError: 'email is required',
            })
            return false;
        } else {
            this.setState({
                usernameError: '',
            })
        }

        if (gender === '') {
            this.setState({
                genderError: 'gender is required',
            })
            return false;
        } else {
            this.setState({
                genderError: '',
            })
        }

        if (city === '') {
            this.setState({
                cityError: 'city is required',
            })
            return false;
        } else {
            this.setState({
                cityError: '',
            })
        }

        if (country === '') {
            this.setState({
                countryError: 'country is required',
            })
            return false;
        } else {
            this.setState({
                countryError: '',
            })
        }



        if (password === '') {
            this.setState({
                passwordError: 'password is required',
            })
            return false;
        } else {
            this.setState({
                passwordError: '',
            })
        }

        if (confirmPassword === '') {
            this.setState({
                confirmPasswordError: 'confirm password is required',
            })
            return false;
        } else {
            this.setState({
                confirmPasswordError: '',
            })
        }
        if (!termsAndCondition) {
            this.setState({
                termsAndConditionError: 'terms and codition is required'
            })
            return false;
        } else {
            this.setState({
                termsAndConditionError: '',
            })
        }

        if (password !== confirmPassword) {
            this.setState({
                confirmPasswordError: 'Password did not match with confirm password'
            })
            return false;
        } else {
            this.setState({
                confirmPasswordError: ''
            })
        }

        if (termsAndCondition) {
            try {
                const userData = {
                    name,
                    lname,
                    email,
                    username,
                    password,
                    gender,
                    city,
                    country,
                    termsAndCondition,
                    userType: 'customer'
                }
                await this.props.userSignup(userData);

                if (this.props.authResponse.authToken) {
                    const decode = jwt_decode(this.props.authResponse.authToken);
                    const { userType } = decode.user;
                    console.log('doced::', decode);
                    if (userType && userType === 'customer') {
                        this.props.history.push('/user/profile');
                    }
                }

            } catch (error) {
                console.log('error:::', error);
            }

        }


    }

    toggleChange = () => {
        this.setState({
            termsAndCondition: !this.state.termsAndCondition,
        });
    }

    componentDidUpdate() {
        if (this.props.authResponse.authToken) {
            const decode = jwt_decode(this.props.authResponse.authToken);
            const { userType } = decode.user;

            if (userType && userType === 'customer') {
                this.props.history.push('/user/profile');
            }
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section-content padding-y">
                    <div className="card mx-auto" style={{ maxWidth: 520, marginTop: 40 }}>
                        <article className="card-body">
                            <header className="mb-4"><h4 className="card-title">Sign up</h4></header>
                            <form>
                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>First name</label>
                                        <input type="text" name="name" className="form-control" placeholder="First Name" onChange={(e) => this.handleOnChange(e)} />
                                        <span style={{ color: 'red' }}>{this.state.nameError}</span>
                                    </div> {/* form-group end.// */}
                                    <div className="col form-group">
                                        <label>Last name</label>
                                        <input type="text" name="lname" className="form-control" placeholder="Last Name" onChange={(e) => this.handleOnChange(e)} />
                                        <span style={{ color: 'red' }}>{this.state.lnameError}</span>
                                    </div> {/* form-group end.// */}
                                </div> {/* form-row end.// */}
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="Email address" onChange={(e) => this.handleOnChange(e)} />
                                    <span style={{ color: 'red' }}>{this.state.emailError}</span>
                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div> {/* form-group end.// */}
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" className="form-control" placeholder="Username" onChange={(e) => this.handleOnChange(e)} />
                                    <span style={{ color: 'red' }}>{this.state.usernameError}</span>
                                </div> {/* form-group end.// */}
                                <div className="form-group">
                                    <label className="custom-control custom-radio custom-control-inline">
                                        <input className="custom-control-input" type="radio" name="gender" defaultValue="male" onChange={(e) => this.handleOnChange(e)} />
                                        <span className="custom-control-label"> Male </span>
                                    </label>
                                    <label className="custom-control custom-radio custom-control-inline">
                                        <input className="custom-control-input" type="radio" name="gender" defaultValue="female" onChange={(e) => this.handleOnChange(e)} />
                                        <span className="custom-control-label"> Female </span>
                                    </label>
                                    <span style={{ color: 'red' }}>{this.state.genderError}</span>
                                </div> {/* form-group end.// */}
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>City</label>
                                        <input type="text" name="city" className="form-control" onChange={(e) => this.handleOnChange(e)} />
                                        <span style={{ color: 'red' }}>{this.state.cityError}</span>
                                    </div> {/* form-group end.// */}
                                    <div className="form-group col-md-6">
                                        <label>Country</label>
                                        <select id="inputState" name="country" className="form-control" onChange={(e) => this.handleOnChange(e)} >
                                            <option> Choose...</option>
                                            <option value={'pakistan'}>Pakistan</option>
                                            <option value={'russia'}>Russia</option>
                                            <option value={'united state'} >United States</option>
                                            <option value={'india'}>India</option>
                                            <option value={'afghanistan'}>Afganistan</option>
                                        </select>
                                        <span style={{ color: 'red' }}>{this.state.countryError}</span>
                                    </div> {/* form-group end.// */}
                                </div> {/* form-row.// */}
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Create password</label>
                                        <input className="form-control" name="password" type="password" onChange={(e) => this.handleOnChange(e)} />
                                        <span style={{ color: 'red' }}>{this.state.passwordError}</span>
                                    </div> {/* form-group end.// */}
                                    <div className="form-group col-md-6">
                                        <label>Repeat password</label>
                                        <input className="form-control" name="confirmPassword" type="password" onChange={(e) => this.handleOnChange(e)} />
                                        <span style={{ color: 'red' }}>{this.state.confirmPasswordError}</span>
                                    </div> {/* form-group end.// */}
                                </div>
                                <div className="form-group">
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="termsAndCondition" checked={this.state.termsAndCondition} onChange={(e) => this.toggleChange(e)} />
                                        <div className="custom-control-label"> I am agree with <a href="/">terms and contitions</a></div> </label>
                                    <span style={{ color: 'red' }}>{this.state.termsAndConditionError}</span>
                                </div> {/* form-group end.// */}

                                <div className="form-group">
                                    <button className="btn btn-primary btn-block" onClick={(e) => this.handleSignup(e)}> Register</button>
                                </div> {/* form-group// */}

                            </form>
                        </article>{/* card-body.// */}
                    </div> {/* card .// */}
                    <p className="text-center mt-4">Have an account? <Link to="/user/login">Log In</Link></p>
                    <br /><br />
                </section>
            </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        authResponse: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userSignup: (userData) => dispatch(userSignup(userData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserRegister));
