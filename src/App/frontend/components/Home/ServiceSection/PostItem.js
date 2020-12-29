import React from 'react'

export default function PostItem(props) {
    return (

        <React.Fragment>
            {
                props.postImg.map((img, index) => {
                    return (

                        <div className="col-md-3 col-sm-6">
                            <article className="card card-post">
                                <img src={img} alt={index + 1} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="title">Trade Assurance</h6>
                                    <p className="small text-uppercase text-muted">Order protection</p>
                                </div>
                            </article>
                        </div>
                    )
                })
            }

        </React.Fragment>
    )
}
