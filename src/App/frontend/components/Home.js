import React, { Component } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

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
                <Header />
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

                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;