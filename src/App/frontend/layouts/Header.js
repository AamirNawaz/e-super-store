import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo3661.png';


function Header(props) {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        props.cart.forEach(item => {
            count = count + item.qty;
        })
        setCartCount(count);

    }, [props.cart, cartCount])

    return (
        <header className="section-header">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <Link to="/" className="brand-wrap">
                                <img className="logo" src={Logo} alt="Logo" />
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

                                <div className="widget-header mr-3">
                                   <Link to="/user/login" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-user" />
                                            
                                        </div>
                                        <div className="" data-toggle="dropdown" style={{fontSize: '14px'}}>Login </div>
                                      
                                    </Link>
                                </div> 

                                {/* <div className="widget-header mr-3">
                                   <div className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-user" />
                                            
                                        </div>
                                        <div className="nav-link dropdown-toggle" data-toggle="dropdown" style={{fontSize: '14px'}}> My profile </div>
                                        <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="/profile">Profile</Link>
                                    <Link  className="dropdown-item" to="/profile-wishlist">My Wishlist</Link>
                                    <Link  className="dropdown-item" to="/profile-orders">My Orders</Link>
                                    <Link  className="dropdown-item" to="/profile-setting">Setting</Link> 
                                    <Link  className="dropdown-item" to="/logout">Logout</Link> 
                                </div>
                                    </div>
                                </div> */}
                       



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
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/"> <i className="fa fa-bars text-muted mr-2" /> Demo pages </a>
                                <div className="dropdown-menu dropdown-large">
                                    <nav className="row">
                                        <div className="col-6">
                                            <a href="page-index-1.html">Home page 1</a>
                                            <a href="page-index-2.html">Home page 2</a>
                                            <a href="page-category.html">All category</a>
                                            <a href="page-listing-large.html">Listing list</a>
                                            <a href="page-listing-grid.html">Listing grid</a>
                                            <a href="page-shopping-cart.html">Shopping cart</a>
                                            <a href="page-detail-product.html">Product detail</a>
                                            <a href="page-content.html">Page content</a>
                                            <a href="page-user-login.html">Page login</a>
                                            <a href="page-user-register.html">Page register</a>
                                        </div>
                                        <div className="col-6">
                                            <a href="page-profile-main.html">Profile main</a>
                                            <a href="page-profile-orders.html">Profile orders</a>
                                            <a href="page-profile-seller.html">Profile seller</a>
                                            <a href="page-profile-wishlist.html">Profile wishlist</a>
                                            <a href="page-profile-setting.html">Profile setting</a>
                                            <a href="page-profile-address.html">Profile address</a>
                                            <a href="rtl-page-index-1.html">RTL home page</a>
                                            <a href="page-components.html" target="_blank">More components</a>
                                        </div>
                                    </nav> {/*  row end .// */}
                                </div> {/*  dropdown-menu dropdown-large end.// */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shope-products">Shope </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Trade shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sell with us</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-md-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Get the app</a>
                            </li>
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
        wishList: state.shope.wishList
    }
}
export default connect(mapStateToProps, null)(Header);