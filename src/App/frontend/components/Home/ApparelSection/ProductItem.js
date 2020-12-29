import React from 'react'

export default function ProductItem(props) {
    return (
        <React.Fragment>
            {
                props.imgs.map((img, index) => {
                    return (
                        <li className="col-6 col-lg-3 col-md-4">
                            <a href="/" className="item">
                                <div className="card-body">
                                    <h6 className="title">Well made women clothes with trending collection</h6>


                                    <img className="img-sm float-right" key={index} src={img} alt={index + 1} />


                                    <p className="text-muted"><i className="fa fa-map-marker-alt" /> Guanjou, China</p>
                                </div>
                            </a>
                        </li>
                    )

                })
            }
        </React.Fragment>
    )
}
