import React from 'react'

export default function CardProduct(props) {
    return (
        <React.Fragment>
            {
                props.imgs.map((img, index) => {
                    return (<div className="col-md col-6">
                        <figure className="card-product-grid card-sm">
                            <a href="/" className="img-wrap">

                                <img src={img} alt={index + 1} />

                            </a>
                            <div className="text-wrap p-3">
                                <a href="/" className="title">Summer clothes</a>
                                <span className="badge badge-danger"> -20% </span>
                            </div>
                        </figure>
                    </div>)
                })
            }
        </React.Fragment>
    )
}
