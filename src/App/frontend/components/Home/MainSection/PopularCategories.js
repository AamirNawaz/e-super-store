import React from 'react'
import item1 from "../../../../assets/images/items/1.jpg";
import item2 from '../../../../assets/images/items/2.jpg'
import item3 from '../../../../assets/images/items/3.jpg'
export default function PopularCategories() {
    return (
        <React.Fragment>
            <div className="col-md d-none d-lg-block flex-grow-1">
                <aside className="special-home-right">
                    <h6 className="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
                    <div className="card-banner border-bottom">
                        <div className="py-3" style={{ width: '80%' }}>
                            <h6 className="card-title">Men clothing</h6>
                            <a href="/" className="btn btn-secondary btn-sm"> Source now </a>
                        </div>
                        <img src={item1} alt="item 1" height={80} className="img-bg" />
                    </div>
                    <div className="card-banner border-bottom">
                        <div className="py-3" style={{ width: '80%' }}>
                            <h6 className="card-title">Winter clothing </h6>
                            <a href="/" className="btn btn-secondary btn-sm"> Source now </a>
                        </div>
                        <img src={item2} alt="item 2" height={80} className="img-bg" />
                    </div>
                    <div className="card-banner border-bottom">
                        <div className="py-3" style={{ width: '80%' }}>
                            <h6 className="card-title">Home inventory</h6>
                            <a href="/" className="btn btn-secondary btn-sm"> Source now </a>
                        </div>
                        <img src={item3} alt="item 3" height={80} className="img-bg" />
                    </div>
                </aside>
            </div> {/* col.// */}
        </React.Fragment>
    )
}
