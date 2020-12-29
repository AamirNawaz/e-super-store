import React from 'react'
import CardProduct from './CardProduct'

import item1 from '../../../../assets/images/items/1.jpg';
import item2 from '../../../../assets/images/items/2.jpg';
import item3 from '../../../../assets/images/items/3.jpg';
import item4 from '../../../../assets/images/items/4.jpg';
import item5 from '../../../../assets/images/items/5.jpg';
import item6 from '../../../../assets/images/items/6.jpg';


const items = [item1, item2, item3, item4, item5, item6,]

export default function ProductContainer() {
    return (
        <React.Fragment>
            <div className="col-md-9 col-9 ">
                <div className="row no-gutters  items-wrap">
                    <CardProduct imgs={items} />
                </div>
            </div>
        </React.Fragment>
    )
}
