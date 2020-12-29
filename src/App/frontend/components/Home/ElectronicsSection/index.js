import React from 'react'
import ProductContainer from '../DealSection/ProductContainer'

import item14 from '../../../../assets/images/items/14.jpg'

export default function index() {
    return (
        <React.Fragment>
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Electronics</h4>
                </header>
                <div className="card card-home-category">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="home-category-banner bg-light-orange">
                                <h5 className="title">Machinery items for manufacturers</h5>
                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href="/" className="btn btn-outline-primary rounded-pill">Source now</a>
                                <img src={item14} alt="item14" className="img-bg" />
                            </div>
                        </div> {/* col.// */}

                        <ProductContainer />
                    </div> {/* row.// */}
                </div> {/* card.// */}
            </section>
        </React.Fragment>
    )
}
