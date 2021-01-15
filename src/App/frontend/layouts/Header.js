import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo_main.png';
import { userLogout } from '../../redux/reducer/Auth/authActions';


function Header(props) {
    const [cartCount, setCartCount] = useState(0);
    const [userType, setUserType] = useState(0);
    const [userName, setUserName] = useState(0);

    useEffect(() => {
        let count = 0;
        props.cart.forEach(item => {
            count = count + item.qty;
        })
        setCartCount(count);

    }, [props.cart, cartCount])

    useEffect(() => {
        if (props.auth.authToken) {
            const decode = jwtDecode(props.auth.authToken);
            setUserType(decode.user.userType);
            setUserName(decode.user.name);
        }
    }, [props.auth, userType])

    const { categories } = props;

    return (

        <header className="section-header">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <Link to="/" className="brand-wrap">
                                <img src={Logo} style={{ height: '100px' }} alt="Logo" />
                            </Link>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <form action="/" className="search-header">
                                <div className="input-group w-100">
                                    <select className="custom-select border-right" name="category_name">
                                        <option value>All type</option><option value="codex">Special</option>
                                        <option value="comments">Only best</option>
                                        <option value="content">Latest</option>
                                    </select>
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">
                                            <i className="fa fa-search" /> Search
          </button>
                                    </div>
                                </div>
                            </form> {/* search-wrap .end// */}
                        </div> {/* col.// */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="widgets-wrap float-md-right">
                                <div className="widget-header">
                                    <Link to="/cart-details" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-shopping-cart" />
                                            <span className="notify">{cartCount}</span>
                                        </div>
                                        <small className="text"> Cart </small>
                                    </Link>
                                </div>

                                <div className="widget-header">
                                    <Link to="/profile-wishlist" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-heart" />
                                            <span className="notify">{props.wishList.length}</span>
                                        </div>
                                        <small className="text"> Wishlist </small>
                                    </Link>
                                </div>


                                {userType && userType === 'admin' ? (
                                    <div className="widget-header mr-3">
                                        <div className="widget-view">
                                            <div className="icon-area">
                                                <i className="fa fa-user" />

                                            </div>
                                            <div className="nav-link dropdown-toggle" data-toggle="dropdown" style={{ fontSize: '14px' }}> {userName} </div>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="/admin/dashboard">Dashboard</Link>
                                                <Link className="dropdown-item" to="/profile-setting">Setting</Link>
                                                <Link className="dropdown-item" to="/admin/logout" onClick={() => props.logoutBtn()}>Logout</Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                        <div className="widget-header mr-3">
                                            <Link to="/user/login" className="widget-view">
                                                <div className="icon-area">
                                                    <i className="fa fa-user" />

                                                </div>
                                                <div className="" data-toggle="dropdown" style={{ fontSize: '14px' }}>Login </div>

                                            </Link>
                                        </div>
                                    )
                                }


                                {userType && userType === 'customer' ? (
                                    <div className="widget-header mr-3">
                                        <div className="widget-view">
                                            <div className="icon-area">
                                                <i className="fa fa-user" />

                                            </div>
                                            <div className="nav-link dropdown-toggle" data-toggle="dropdown" style={{ fontSize: '14px' }}> My profile </div>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                                <Link className="dropdown-item" to="/profile-wishlist">My Wishlist</Link>
                                                <Link className="dropdown-item" to="/profile-orders">My Orders</Link>
                                                <Link className="dropdown-item" to="/profile-setting">Setting</Link>
                                                <Link className="dropdown-item" to="/logout">Logout</Link>
                                            </div>
                                        </div>
                                    </div>

                                ) :
                                    ''
                                }




                                {/* <div className="widget-header">
                                    <Link to="/admin/dashboard" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-store" />
                                        </div>
                                        <small className="text"> Dashboard </small>
                                    </Link>
                                </div> */}
                            </div> {/* widgets-wrap.// */}
                        </div> {/* col.// */}
                    </div> {/* row.// */}
                </div> {/* container.// */}
            </section> {/* header-main .// */}
            <nav className="navbar navbar-main navbar-expand-lg border-bottom">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/"> <i className="fa fa-bars text-muted mr-2" />All category </a>
                                <div className="dropdown-menu dropdown-large" style={{ width: '197%' }}>
                                    <nav className="row">
                                        <div className="col-12" style={{ marginLeft: '15px' }}>
                                            {categories && categories.length ? (
                                                categories.map((category, index) => {
                                                    return (
                                                        <li key={index}><Link to={`/shope-products`}>{category.name}</Link></li>
                                                    )
                                                })
                                            ) : ('')}
                                        </div>
                                    </nav> {/*  row end .// */}
                                </div> {/*  dropdown-menu dropdown-large end.// */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shope-products">Shope </Link>
                            </li>

                        </ul>
                        <ul className="navbar-nav ml-md-auto">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/">Get the app</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">English</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="/">Russian</a>
                                    <a className="dropdown-item" href="/">French</a>
                                    <a className="dropdown-item" href="/">Spanish</a>
                                    <a className="dropdown-item" href="/">Chinese</a>
                                </div>
                            </li>
                        </ul>
                    </div> {/* collapse .// */}
                </div> {/* container .// */}
            </nav>
        </header>

    )
}

const mapStateToProps = (state) => {

    return {
        cart: state.shope.cart,
        wishList: state.shope.wishList,
        auth: state.auth,
        categories: state.categoryReducer.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutBtn: () => dispatch(userLogout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);