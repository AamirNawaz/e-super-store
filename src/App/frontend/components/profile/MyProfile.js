import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo3661.png';


import item1 from '../../../assets/images/items/1.jpg';
import item2 from '../../../assets/images/items/2.jpg';
import item6 from '../../../assets/images/items/6.jpg';

import avatar3 from '../../../assets/images/avatars/avatar3.jpg'




class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div>
            <header className="section-header">
                <section className="header-main border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3 col-md-12">
                                <a href="/" className="brand-wrap">
                                    <img className="logo" src={Logo} alt="Logo" />
                                </a>
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
                                    <div className="widget-header mr-3">
                                        <Link to="/profile" className="widget-view">
                                            <div className="icon-area">
                                                <i className="fa fa-user" />
                                                <span className="notify">3</span>
                                            </div>
                                            <small className="text"> My profile </small>
                                        </Link>
                                    </div>
                                    <div className="widget-header mr-3">
                                        <Link to="/" className="widget-view">
                                            <div className="icon-area">
                                                <i className="fa fa-comment-dots" />
                                                <span className="notify">1</span>
                                            </div>
                                            <small className="text"> Message </small>
                                        </Link>
                                    </div>
                                    <div className="widget-header mr-3">
                                        <a href="/" className="widget-view">
                                            <div className="icon-area">
                                                <i className="fa fa-store" />
                                            </div>
                                            <small className="text"> Orders </small>
                                        </a>
                                    </div>
                                    <div className="widget-header">
                                        <a href="/" className="widget-view">
                                            <div className="icon-area">
                                                <i className="fa fa-shopping-cart" />
                                            </div>
                                            <small className="text"> Cart </small>
                                        </a>
                                    </div>
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
                                    <a className="nav-link" href="/">Ready to ship</a>
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
            {/* section-header.// */}
            {/* ========================= SECTION PAGETOP ========================= */}
            <section className="section-pagetop bg-gray">
                <div className="container">
                    <center><h2 className="title-page">My account</h2></center>
                </div> {/* container //  */}
            </section>
            {/* ========================= SECTION PAGETOP END// ========================= */}


            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <nav className="list-group">
                                <a className="list-group-item active" href="page-profile-main.html"> Account overview</a>
                                <a className="list-group-item" href="page-profile-address.html"> My Address </a>
                                <a className="list-group-item" href="page-profile-orders.html"> My Orders </a>
                                <a className="list-group-item" href="page-profile-wishlist.html"> My wishlist </a>
                                <a className="list-group-item" href="page-profile-seller.html"> My Selling Items </a>
                                <a className="list-group-item" href="page-profile-setting.html"> Settings </a>
                                <a className="list-group-item" href="page-index-1.html"> Log out </a>
                            </nav>
                        </aside> {/* col.// */}
                        <main className="col-md-9">
                            <article className="card mb-3">
                                <div className="card-body">
                                    <figure className="icontext">
                                        <div className="icon">
                                            <img className="rounded-circle img-sm border" src={avatar3} alt="avatar" />
                                        </div>
                                        <div className="text">
                                            <strong> Mr. Jackson Someone </strong> <br />
                                            <p className="mb-2"> myloginname@gmail.com</p>
                                            <a href="/" className="btn btn-light btn-sm">Edit</a>
                                        </div>
                                    </figure>
                                    <hr />
                                    <p>
                                        <i className="fa fa-map-marker text-muted" /> &nbsp; My address:
              <br />
              Tashkent city, Street name, Building 123, House 321 &nbsp;
              <a href="/" className="btn-link"> Edit</a>
                                    </p>
                                    <article className="card-group card-stat">
                                        <figure className="card bg">
                                            <div className="p-3">
                                                <h4 className="title">38</h4>
                                                <span>Orders</span>
                                            </div>
                                        </figure>
                                        <figure className="card bg">
                                            <div className="p-3">
                                                <h4 className="title">5</h4>
                                                <span>Wishlists</span>
                                            </div>
                                        </figure>
                                        <figure className="card bg">
                                            <div className="p-3">
                                                <h4 className="title">12</h4>
                                                <span>Awaiting delivery</span>
                                            </div>
                                        </figure>
                                        <figure className="card bg">
                                            <div className="p-3">
                                                <h4 className="title">50</h4>
                                                <span>Delivered items</span>
                                            </div>
                                        </figure>
                                    </article>
                                </div> {/* card-body .// */}
                            </article> {/* card.// */}
                            <article className="card  mb-3">
                                <div className="card-body">
                                    <h5 className="card-title mb-4">Recent orders </h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <figure className="itemside  mb-3">
                                                <div className="aside"><img src={item1} alt="item3" className="border img-sm" /></div>
                                                <figcaption className="info">
                                                    <time className="text-muted"><i className="fa fa-calendar-alt" /> 12.09.2019</time>
                                                    <p>Great book name goes here </p>
                                                    <span className="text-success">Order confirmed </span>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}
                                        <div className="col-md-6">
                                            <figure className="itemside  mb-3">
                                                <div className="aside"><img src={item2} alt="item3" className="border img-sm" /></div>
                                                <figcaption className="info">
                                                    <time className="text-muted"><i className="fa fa-calendar-alt" /> 12.09.2019</time>
                                                    <p>How to be rich</p>
                                                    <span className="text-success">Departured</span>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}
                                        <div className="col-md-6">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src={item6} alt="item3" className="border img-sm" /></div>
                                                <figcaption className="info">
                                                    <time className="text-muted"><i className="fa fa-calendar-alt" /> 12.09.2019</time>
                                                    <p>Harry Potter book </p>
                                                    <span className="text-success">Shipped</span>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}
                                    </div> {/* row.// */}
                                    <a href="/" className="btn btn-outline-primary btn-block"> See all orders <i className="fa fa-chevron-down" /></a>
                                </div> {/* card-body .// */}
                            </article> {/* card.// */}
                        </main> {/* col.// */}
                    </div>
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}



        </div>)
    }
}

export default MyProfile;