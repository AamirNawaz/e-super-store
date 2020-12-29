import React from 'react'
import ProductContainer from './ProductContainer'

import item2 from "../../../../assets/images/items/2.jpg";
export default function index() {
    return (
        <React.Fragment>
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Apparel</h4>
                </header>
                <div className="card card-home-category">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="home-category-banner bg-light-orange">
                                <h5 className="title">Best trending clothes only for summer</h5>
                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href="/" className="btn btn-outline-primary rounded-pill">Source now</a>
                                <img src={item2} alt="item2" className="img-bg" />
                            </div>
                        </div> {/* col.// */}

                        <ProductContainer />

                    </div> {/* row.// */}
                </div> {/* card.// */}
            </section>

        </React.Fragment>
    )
}
