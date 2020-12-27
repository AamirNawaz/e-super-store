import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo3661.png';

import item1 from '../../assets/images/items/1.jpg';
import item2 from '../../assets/images/items/2.jpg';
import item6 from '../../assets/images/items/6.jpg';

import slide1 from '../../assets/images/banners/slide1.jpg';
import slide2 from '../../assets/images/banners/slide2.jpg';
import slide3 from '../../assets/images/banners/slide3.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
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

                <div className="container">
                    {/* ========================= SECTION MAIN  ========================= */}
                    <section className="section-main padding-y">
                        <main className="card">
                            <div className="card-body">
                                <div className="row">
                                    <aside className="col-lg col-md-3 flex-lg-grow-0">
                                        <nav className="nav-home-aside">
                                            <h6 className="title-category">MY MARKETS <i className="d-md-none icon fa fa-chevron-down" /></h6>
                                            <ul className="menu-category">
                                                <li><a href="/">Fashion and clothes</a></li>
                                                <li><a href="/">Automobile and motors</a></li>
                                                <li><a href="/">Gardening and agriculture</a></li>
                                                <li><a href="/">Electronics and tech</a></li>
                                                <li><a href="/">Packaginf and printing</a></li>
                                                <li><a href="/">Home and kitchen</a></li>
                                                <li><a href="/">Digital goods</a></li>
                                                <li className="has-submenu"><a href="/">More items</a>
                                                    <ul className="submenu">
                                                        <li><a href="/">Submenu name</a></li>
                                                        <li><a href="/">Great submenu</a></li>
                                                        <li><a href="/">Another menu</a></li>
                                                        <li><a href="/">Some others</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </aside> {/* col.// */}
                                    <div className="col-md-9 col-xl-7 col-lg-7">
                                        {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                                        <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#carousel1_indicator" data-slide-to={0} className="active" />
                                                <li data-target="#carousel1_indicator" data-slide-to={1} />
                                                <li data-target="#carousel1_indicator" data-slide-to={2} />
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={slide1} alt="First slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={slide2} alt="Second slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={slide3} alt="Third slide" />
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                        {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
                                    </div> {/* col.// */}
                                    <div className="col-md d-none d-lg-block flex-grow-1">
                                        <aside className="special-home-right">
                                            <h6 className="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
                                            <div className="card-banner border-bottom">
                                                <div className="py-3" style={{ width: '80%' }}>
                                                    <h6 className="card-title">Men clothing</h6>
                                                    <a href="/" className="btn btn-secondary btn-sm"> Source now </a>
                                                </div>
                                                <img src={item1} alt="item 1" height={80} className="img-bg" />
                                            </div>
                                            <div className="card-banner border-bottom">
                                                <div className="py-3" style={{ width: '80%' }}>
                                                    <h6 className="card-title">Winter clothing </h6>
                                                    <a href="/" className="btn btn-secondary btn-sm"> Source now </a>
                                                </div>
                                                <img src={item2} alt="item 2" height={80} className="img-bg" />
                                            </div>
                                            <div className="card-banner border-bottom">
                                                <div className="py-3" style={{ width: '80%' }}>
                                                    <h6 className="card-title">Home inventory</h6>
                                                    <a href="/" className="btn btn-secondary btn-sm"> Source now </a>
                                                </div>
                                                <img src={item6} alt="item 3" height={80} className="img-bg" />
                                            </div>
                                        </aside>
                                    </div> {/* col.// */}
                                </div> {/* row.// */}
                            </div> {/* card-body.// */}
                        </main> {/* card.// */}
                    </section>
                    {/* ========================= SECTION MAIN END// ========================= */}
                </div>
                <h1>home</h1>

            </React.Fragment>
        );
    }
}

export default Home;