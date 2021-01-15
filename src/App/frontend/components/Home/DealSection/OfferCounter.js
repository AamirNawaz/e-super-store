import React from 'react'

export default function OfferCounter() {
    return (
        <React.Fragment>

            <div className="col-heading col-md-3 col-3 pl-5 content-body" style={{ border: '1px solid #ebecf0' }}>
                <header className="section-heading">
                    <h3 className="section-title">Deals and offers</h3>
                    <p>OfferCounter equipments</p>
                </header>{/* sect-heading */}
                <div className="timer">
                    <div> <span className="num">04</span> <small>Days</small></div>
                    <div> <span className="num">12</span> <small>Hours</small></div>
                    <div> <span className="num">58</span> <small>Min</small></div>
                    <div> <span className="num">02</span> <small>Sec</small></div>
                </div>
            </div> {/* col.// */}
        </React.Fragment>

    )
}




