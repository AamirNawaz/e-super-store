import React from 'react'
import HygieneEquipments from './HygieneEquipments'
import ProductContainer from './ProductContainer'

export default function DealSection() {
    return (
        <React.Fragment>
            {/* =============== SECTION DEAL =============== */}
            <section className="padding-bottom">
                <div className="card card-deal">
                    <div className="row">
                        <HygieneEquipments />
                        <ProductContainer />
                    </div>
                </div>
            </section>
            {/* =============== SECTION DEAL // END =============== */}

        </React.Fragment>
    )
}
