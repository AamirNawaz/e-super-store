import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux/reducer/Auth/authActions';
function NavTop(props) {
    const [userName, setUserName] = useState('');
    useEffect(() => {
        if (props.auth.authToken) {
            const decode = jwtDecode(props.auth.authToken);
            setUserName(decode.user.name);
        }
    }, [props.auth, userName]);

    return (
        <React.Fragment>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <Link className="navbar-brand" to="/admin/dashboard">E-Super Store</Link>
                <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="/"><i className="fas fa-bars" /></button>

                {/* Navbar*/}
                <div className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0" style={{ color: 'white', marginRight: '-9px !important' }}>{userName}</div>
                <ul className="navbar-nav ml-auto ml-md-0 ">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="userDropdown" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="/">Settings</a>
                            <a className="dropdown-item" href="/">Activity Log</a>
                            <div className="dropdown-divider" />
                            <Link className="dropdown-item" to="/admin/logout" onClick={() => props.logoutBtn()}>Logout</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutBtn: () => dispatch(userLogout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavTop);