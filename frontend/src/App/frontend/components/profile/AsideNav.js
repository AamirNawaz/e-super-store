import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userLogout } from '../../../redux/reducer/Auth/authActions';

function AsideNav(props) {
    const [active, setActive] = useState('profile');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const url = props.match.url;
        if (url === "/users/profile") {
            alert('t')
            setActive('profile');
        }
        else if (url === "/user/profile-address") {
            setActive('address');
        }
        else if (url === "/user/profile-orders") {
            setActive('orders');

        } else if (url === "/user/profile-wishlist") {
            setActive('wishlist');

        } else if (url === "/user/profile-setting") {
            setActive('setting');
        }
    }, [props.match.url]);

    useEffect(() => {
        if (!props.auth.authToken) {
            props.logoutBtn();
            props.history.push('/user/logout');
        }
    });

    useEffect(() => {
        if (props.auth.authToken) {
            const decode = jwtDecode(props.auth.authToken);
            setUserName(decode.user.name);
        }
    }, [props.auth, userName]);

    const onClickActive = async (menuItem) => {
        setActive(menuItem);

    };
    return (
        <React.Fragment>
            <aside className="col-md-3">
                <nav className="list-group">
                    <Link className={active === 'profile' ? 'list-group-item active ' : 'list-group-item '} onClick={() => onClickActive('profile')} to="/user/profile">Account overview</Link>

                    <Link className={active === 'address' ? 'list-group-item active' : 'list-group-item'} onClick={() => onClickActive('address')} to="/user/profile-address"> My Address </Link>
                    <Link className={active === 'orders' ? 'list-group-item active' : 'list-group-item'} onClick={() => onClickActive('orders')} to="/user/profile-orders"> My Orders </Link>
                    <Link className={active === 'wishlist' ? 'list-group-item active' : 'list-group-item'} onClick={() => onClickActive('wishlist')} to="/user/profile-wishlist"> My Wishlist </Link>
                    <Link className={active === 'setting' ? 'list-group-item active' : 'list-group-item'} onClick={() => onClickActive('setting')} to="/user/profile-setting"> My Setting </Link>
                    <Link className="list-group-item" to="/user/logout" onClick={() => props.logoutBtn()}> Log out </Link>
                </nav>
            </aside> {/* col.// */}
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AsideNav));