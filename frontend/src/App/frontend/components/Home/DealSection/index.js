import React from 'react'
import DealProduct from './DealProduct'
import OfferCounter from './OfferCounter';


export default function DealSection() {
    return (
        <React.Fragment>
            {/* =============== SECTION DEAL =============== */}
            <section className="padding-bottom">
                <div className="card card-deal">
                    <div className="row">
                        <OfferCounter />
                        <DealProduct />
                    </div>
                </div>
            </section>
            {/* =============== SECTION DEAL // END =============== */}

        </React.Fragment>
    )
}
