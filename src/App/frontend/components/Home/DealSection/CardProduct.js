import React from 'react'
import { Link } from 'react-router-dom'

export default function CardProduct(props) {
    return (
        <React.Fragment>
            {
                props.imgs.map((img, index) => {
                    return (<div key={index} className="col-md col-6">
                        <figure className="card-product-grid card-sm">
                            <Link to="/shope-products" className="img-wrap">

                                <img src={img} alt={index + 1} />

                            </Link>
                            <div className="text-wrap p-3">
                                <Link to="/shope-products" className="title">Summer clothes</Link>
                                <span className="badge badge-danger"> -20% </span>
                            </div>
                        </figure>
                    </div>)
                })
            }
        </React.Fragment>
    )
}
