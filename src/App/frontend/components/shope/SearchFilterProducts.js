import React from 'react';

function SearchFilterProducts(){
    return(
        <React.Fragment>
              {/* ============================  FILTER TOP  ================================= */}
              <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2"> Your are here: </div> {/* col.// */}
                                    <nav className="col-md-8">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item"><a href="/">Category name</a></li>
                                            <li className="breadcrumb-item"><a href="/">Sub category</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Items</li>
                                        </ol>
                                    </nav> {/* col.// */}
                                </div> {/* row.// */}
                                <hr />
                                <div className="row">
                                    <div className="col-md-2">Filter by</div> {/* col.// */}
                                    <div className="col-md-10">
                                        <ul className="list-inline">
                                            <li className="list-inline-item mr-3 dropdown"><a href="/" className="dropdown-toggle" data-toggle="dropdown">   Supplier type </a>
                                                <div className="dropdown-menu p-3" style={{ maxWidth: 400 }}>
                                                    <label className="form-check">
                                                        <input type="radio" name="myfilter" className="form-check-input" /> Good supplier
              </label>
                                                    <label className="form-check">
                                                        <input type="radio" name="myfilter" className="form-check-input" /> Best supplier
              </label>
                                                    <label className="form-check">
                                                        <input type="radio" name="myfilter" className="form-check-input" /> New supplier
              </label>
                                                </div> {/* dropdown-menu.// */}
                                            </li>
                                            <li className="list-inline-item mr-3 dropdown">
                                                <a href="/" className="dropdown-toggle" data-toggle="dropdown">  Country </a>
                                                <div className="dropdown-menu p-3">
                                                    <label className="form-check"> 	 <input type="checkbox" className="form-check-input" /> China  </label>
                                                    <label className="form-check">   	 <input type="checkbox" className="form-check-input" /> Japan    </label>
                                                    <label className="form-check">    <input type="checkbox" className="form-check-input" /> Uzbekistan</label>
                                                    <label className="form-check">  <input type="checkbox" className="form-check-input" /> Russia   </label>
                                                </div> {/* dropdown-menu.// */}
                                            </li>
                                            <li className="list-inline-item mr-3 dropdown">
                                                <a href="/" className="dropdown-toggle" data-toggle="dropdown">Feature</a>
                                                <div className="dropdown-menu">
                                                    <a href="/" className="dropdown-item">Anti backterial</a>
                                                    <a href="/" className="dropdown-item">With buttons</a>
                                                    <a href="/" className="dropdown-item">Extra safety</a>
                                                </div>
                                            </li>
                                            <li className="list-inline-item mr-3"><a href="/">Color</a></li>
                                            <li className="list-inline-item mr-3"><a href="/">Size</a></li>
                                            <li className="list-inline-item mr-3">
                                                <div className="form-inline">
                                                    <label className="mr-2">Price</label>
                                                    <input className="form-control form-control-sm" placeholder="Min" type="number" />
                                                    <span className="px-2"> - </span>
                                                    <input className="form-control form-control-sm" placeholder="Max" type="number" />
                                                    <button type="submit" className="btn btn-sm btn-light ml-2">Ok</button>
                                                </div>
                                            </li>
                                            <li className="list-inline-item mr-3">
                                                <label className="custom-control mt-1 custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <div className="custom-control-label">Ready to ship
              </div>
                                                </label>
                                            </li>
                                        </ul>
                                    </div> {/* col.// */}
                                </div> {/* row.// */}
                            </div> {/* card-body .// */}
                        </div> {/* card.// */}
                        {/* ============================ FILTER TOP END.// ================================= */}
        </React.Fragment>
    )
}
export default SearchFilterProducts;