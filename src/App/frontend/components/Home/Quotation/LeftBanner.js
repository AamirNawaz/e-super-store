import React from 'react'

export default function LeftBanner() {
    return (
        <React.Fragment>
            <div className="col-md-8">
                <div className="card-banner banner-quote overlay-gradient" style={{ backgroundImage: 'url("images/banners/banner9.jpg")' }}>
                    <div className="card-img-overlay white">
                        <h3 className="card-title">An easy way to send request to suppliers</h3>
                        <p className="card-text" style={{ maxWidth: 400 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt.</p>
                        <a href="/" className="btn btn-primary rounded-pill">Learn more</a>
                    </div>
                </div>
            </div> {/* col // */}
        </React.Fragment>
    )
}
