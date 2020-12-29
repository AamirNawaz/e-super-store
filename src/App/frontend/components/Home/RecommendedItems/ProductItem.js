import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../../../redux/reducer/shope/shopeActions';

function ProductItem(props) {
    return (

        <React.Fragment>
            {
                props.imgs.map((img, index) => {
                    return (<div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <a href="/" className="img-wrap"> <img src={img} alt={index + 1} /> </a>
                            <figcaption className="info-wrap">
                                <a href="/" className="title">Just another product name</a>
                                <div className="price mt-1">$179.00</div>
                                <button className="btn btn-warning btn-sm" onClick={() => props.addToCartBtn(1)}>Add To Cart</button>
                            </figcaption>
                        </div>
                    </div>
                    )

                })
            }

        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartBtn: (productID) => dispatch(addToCart(productID))
    }
}
export default connect(null, mapDispatchToProps)(ProductItem);
