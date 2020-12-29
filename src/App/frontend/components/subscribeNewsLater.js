import React from 'react';

function SubscribeNewsLater() {
    return (
        <React.Fragment>
            {/* ========================= SECTION SUBSCRIBE  ========================= */}
            <section className="padding-y-lg bg-light border-top">
                <div className="container">
                    <p className="pb-2 text-center">Delivering the latest product trends and industry news straight to your inbox</p>
                    <div className="row justify-content-md-center">
                        <div className="col-lg-4 col-sm-6">
                            <form className="form-row">
                                <div className="col-8">
                                    <input className="form-control" placeholder="Your Email" type="email" />
                                </div> {/* col.// */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-block btn-warning"> <i className="fa fa-envelope" /> Subscribe </button>
                                </div> {/* col.// */}
                            </form>
                            <small className="form-text">We’ll never share your email address with a third-party. </small>
                        </div> {/* col-md-6.// */}
                    </div>
                </div>
            </section>
            {/* ========================= SECTION SUBSCRIBE END// ========================= */}

        </React.Fragment>
    )
}

export default SubscribeNewsLater;