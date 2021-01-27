import React from 'react'
import { connect } from 'react-redux';

function MainSlider(props) {
    const sliders = props.sliders && props.sliders.length ? props.sliders.filter(slider => slider.status === 'active') : '';
    return (
        <React.Fragment>
            <div className="col-md-9 col-xl-9 col-lg-7">
                {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {sliders && sliders.length ? (
                            sliders.map((slider, index) => {
                                return (
                                    <li key={slider._id} data-target="#carousel1_indicator" data-slide-to={index} className={index === 0 ? "active" : ""} />
                                )
                            })
                        ) : ('')}
                    </ol>
                    <div className="carousel-inner">
                        {/* here loop will be running for slider */}
                        {sliders && sliders.length ? (
                            sliders.map((slider, index) => {
                                return (
                                    <div key={slider._id} className={index === 0 ? `carousel-item active` : `carousel-item`}>
                                        <img src={slider.image} alt={slider.name} />
                                    </div>);
                            })
                        ) : <span style={{ fontSize: '28px', marginLeft: '30%' }}>No active slider</span>}

                    </div>
                    <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
            </div> {/* col.// */}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        sliders: state.sliderReducer.sliders
    }
}
export default connect(mapStateToProps, null)(MainSlider);