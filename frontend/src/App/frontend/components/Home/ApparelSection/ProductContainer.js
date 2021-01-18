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

const items = [item1, item2, item3, item4, item5, item6, item7, item8]

export default function ProductContainer() {

    return (
        <React.Fragment>


            <div className="col-md-9">
                <ul className="row no-gutters bordered-cols">

                    <ProductItem imgs={items} />

                </ul>
            </div> {/* col.// */}

            {/* =============== SECTION 1 END =============== */}
        </React.Fragment>
    )
}
