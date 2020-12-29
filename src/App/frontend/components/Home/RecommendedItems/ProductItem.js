import React from 'react'

export default function ProductItem(props) {
    return (

        <React.Fragment>
            {
                props.imgs.map((img, index) => {
                    return (<div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <a href="/" className="img-wrap"> <img src={img} alt={index + 1} /> </a>
                            <figcaption className="info-wrap">
                                <a href="/" className="title">Just another product name</a>
                                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    )

                })
            }

        </React.Fragment>
    )
}
