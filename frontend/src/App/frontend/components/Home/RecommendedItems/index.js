import React from 'react'
import ProductItem from './ProductItem'

import item1 from '../../../../assets/images/items/1.jpg';
import item2 from '../../../../assets/images/items/2.jpg';
import item3 from '../../../../assets/images/items/3.jpg';
import item4 from '../../../../assets/images/items/4.jpg';
import item5 from '../../../../assets/images/items/5.jpg';
import item6 from '../../../../assets/images/items/6.jpg';
import item7 from '../../../../assets/images/items/7.jpg';
import item8 from '../../../../assets/images/items/8.jpg';
import item9 from '../../../../assets/images/items/9.jpg';
import item10 from '../../../../assets/images/items/10.jpg';
import item11 from '../../../../assets/images/items/11.jpg';
import item12 from '../../../../assets/images/items/12.jpg';




const items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12]
export default function index() {
    return (
        <React.Fragment>
            <section className="padding-bottom-sm">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Recommended items</h4>
                </header>
                <div className="row row-sm">

                    <ProductItem imgs={items} />


                </div> {/* row.// */}
            </section>
        </React.Fragment>
    )
}
