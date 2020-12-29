import React from 'react'
import LeftBanner from './LeftBanner'
import QuotionForm from './QuotionForm'

export default function index() {
    return (
        <React.Fragment>
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Request for Quotation</h4>
                </header>
                <div className="row">
                    <LeftBanner />
                    <QuotionForm />
                </div> {/* row // */}
            </section>
        </React.Fragment>
    )
}
