import React, { Component } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import PageSectionTop from './PageSectionTop';
import AsideNav from './AsideNav';

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
        return (<React.Fragment>
            <Header />
            <PageSectionTop title="My account" />


            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <AsideNav />
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


            <Footer />
        </React.Fragment>
        )
    }
}

export default MyProfile;