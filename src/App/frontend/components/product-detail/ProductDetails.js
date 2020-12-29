import React from 'react';
import item15 from '../../../assets/images/items/15.jpg';
import item15_1 from '../../../assets/images/items/15-1.jpg';
import item15_2 from '../../../assets/images/items/15-2.jpg';

function ProductDetails() {
    return (
        <React.Fragment>
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content bg-white padding-y">
                <div className="container">
                    {/* ============================ ITEM DETAIL ======================== */}
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">
                                        <div> <a href="/"><img src={item15} alt="" /></a></div>
                                    </div> {/* slider-product.// */}
                                    <div className="thumbs-wrap">
                                        <a href="/" className="item-thumb"> <img src={item15} alt="" /></a>
                                        <a href="/" className="item-thumb"> <img src={item15_1} alt="" /></a>
                                        <a href="/" className="item-thumb"> <img src={item15_2} alt="" /></a>
                                        <a href="/" className="item-thumb"> <img src={item15_1} alt="" /></a>
                                    </div> {/* slider-nav.// */}
                                </article> {/* gallery-wrap .end// */}
                            </div> {/* card.// */}
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">
                                <h2 className="title mt-3">Hot sale unisex New Design Shoe </h2>
                                <div className="rating-wrap my-3">
                                    <ul className="rating-stars">
                                        <li style={{ width: '80%' }} className="stars-active">
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                    <small className="label-rating text-muted">132 reviews</small>
                                    <small className="label-rating text-success"> <i className="fa fa-clipboard-check" /> 154 orders </small>
                                </div> {/* rating-wrap.// */}
                                <div className="mb-3">
                                    <var className="price h4">USD 465,00</var>
                                    <span className="text-muted">USD 562.65 incl. VAT</span>
                                </div> {/* price-detail-wrap .// */}
                                <p>Compact sport shoe for running, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat </p>
                                <dl className="row">
                                    <dt className="col-sm-3">Manufacturer</dt>
                                    <dd className="col-sm-9"><a href="/">Great textile Ltd.</a></dd>
                                    <dt className="col-sm-3">Article number</dt>
                                    <dd className="col-sm-9">596 065</dd>
                                    <dt className="col-sm-3">Guarantee</dt>
                                    <dd className="col-sm-9">2 year</dd>
                                    <dt className="col-sm-3">Delivery time</dt>
                                    <dd className="col-sm-9">3-4 days</dd>
                                    <dt className="col-sm-3">Availabilty</dt>
                                    <dd className="col-sm-9">in Stock</dd>
                                </dl>
                                <div className="form-row  mt-4">
                                    <div className="form-group col-md flex-grow-0">
                                        <div className="input-group mb-3 input-spinner">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-light" type="button" id="button-plus"> + </button>
                                            </div>
                                            <input type="text" className="form-control" defaultValue={1} />
                                            <div className="input-group-append">
                                                <button className="btn btn-light" type="button" id="button-minus"> − </button>
                                            </div>
                                        </div>
                                    </div> {/* col.// */}
                                    <div className="form-group col-md">
                                        <a href="/" className="btn  btn-primary">
                                            <i className="fas fa-shopping-cart" /> <span className="text">Add to cart</span>
                                        </a>
                                        <a href="/" className="btn btn-light">
                                            <i className="fas fa-envelope" /> <span className="text">Contact supplier</span>
                                        </a>
                                    </div> {/* col.// */}
                                </div> {/* row.// */}
                            </article> {/* product-info-aside .// */}
                        </main> {/* col.// */}
                    </div> {/* row.// */}
                    {/* ================ ITEM DETAIL END .// ================= */}
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
            {/* ========================= SECTION  ========================= */}
            {/* ========================= SECTION CONTENT END// ========================= */}


        </React.Fragment>
    )
}

export default ProductDetails;