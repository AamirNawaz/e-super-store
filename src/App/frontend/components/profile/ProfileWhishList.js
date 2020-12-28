import React from 'react';
import Header from '../../layouts/Header';
import AsideNav from './AsideNav';
import PageSectionTop from './PageSectionTop';

import item1 from '../../../assets/images/items/1.jpg';
import item2 from '../../../assets/images/items/2.jpg';
import item6 from '../../../assets/images/items/6.jpg';

function ProfileWhishList() {
    return (
        <React.Fragment>
            <Header />
            <PageSectionTop title="My account" />
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <AsideNav />

                        {/* Content area */}
                        <main className="col-md-9">
                            <article className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <figure className="itemside mb-4">
                                                <div className="aside">
                                                    <img src={item1} alt=" " className="border img-md" /></div>
                                                <figcaption className="info">
                                                    <a href="/" className="title">Great product name goes here</a>
                                                    <p className="price mb-2">$80</p>
                                                    <a href="/" className="btn btn-secondary btn-sm"> Add to cart </a>
                                                    <a href="/" className="btn btn-danger btn-sm" data-toggle="tooltip" title data-original-title="Remove from wishlist"> <i className="fa fa-times" /> </a>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}
                                        <div className="col-md-6">
                                            <figure className="itemside mb-4">
                                                <div className="aside"><img src={item2} alt="" className="border img-md" /></div>
                                                <figcaption className="info">
                                                    <a href="/" className="title">Men's Jackeet for Winter </a>
                                                    <p className="price mb-2">$1280</p>
                                                    <a href="/" className="btn btn-secondary btn-sm"> Add to cart </a>
                                                    <a href="/" className="btn btn-danger btn-sm" data-toggle="tooltip" title data-original-title="Remove from wishlist"> <i className="fa fa-times" /> </a>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}
                                        <div className="col-md-6">
                                            <figure className="itemside mb-4">
                                                <div className="aside">
                                                    <img src={item6} alt="name" className="border img-md" /></div>
                                                <figcaption className="info">
                                                    <a href="/" className="title">Another book of item goes here </a>
                                                    <p className="price mb-2">$280</p>
                                                    <a href="/" className="btn btn-secondary btn-sm"> Add to cart </a>
                                                    <a href="/" className="btn btn-danger btn-sm" data-toggle="tooltip" title data-original-title="Remove from wishlist"> <i className="fa fa-times" /> </a>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}
                                    </div> {/* row .//  */}
                                </div> {/* card-body.// */}
                            </article>
                        </main> {/* col.// */}


                        {/* Content area End */}

                    </div>
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}


        </React.Fragment>
    )
}

export default ProfileWhishList;