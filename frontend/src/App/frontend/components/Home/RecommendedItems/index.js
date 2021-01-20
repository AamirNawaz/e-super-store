import React from 'react'
import ProductItem from './ProductItem'

export default function index() {
    return (
        <React.Fragment>
            <section className="padding-bottom-sm">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Recommended items</h4>
                </header>
                <div className="row row-sm">

                    <ProductItem />


                </div> {/* row.// */}
            </section>
        </React.Fragment>
    )
}
