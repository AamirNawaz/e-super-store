import React from 'react';
import Header from '../../layouts/Header';
import AsideNav from './AsideNav';
import PageSectionTop from './PageSectionTop';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg'

function ProfileWhishList() {
    return (
        <React.Fragment>
            <Header />
            <PageSectionTop title="My account" />
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <AsideNav />

                        {/* Content area */}
                        <main className="col-md-9">
                            <div className="card">
                                <div className="card-body">
                                    <form className="row">
                                        <div className="col-md-9">
                                            <div className="form-row">
                                                <div className="col form-group">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control" defaultValue="Vosidiy" />
                                                </div> {/* form-group end.// */}
                                                <div className="col form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" defaultValue="vosidiy@gmail.com" />
                                                </div> {/* form-group end.// */}
                                            </div> {/* form-row.// */}
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Country</label>
                                                    <select id="inputState" className="form-control">
                                                        <option> Choose...</option>
                                                        <option>Uzbekistan</option>
                                                        <option>Russia</option>
                                                        <option selected>United States</option>
                                                        <option>India</option>
                                                        <option>Afganistan</option>
                                                    </select>
                                                </div> {/* form-group end.// */}
                                                <div className="form-group col-md-6">
                                                    <label>City</label>
                                                    <input type="text" className="form-control" />
                                                </div> {/* form-group end.// */}
                                            </div> {/* form-row.// */}
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Zip</label>
                                                    <input type="text" className="form-control" defaultValue={123009} />
                                                </div> {/* form-group end.// */}
                                                <div className="form-group col-md-6">
                                                    <label>Phone</label>
                                                    <input type="text" className="form-control" defaultValue={+123456789} />
                                                </div> {/* form-group end.// */}
                                            </div> {/* form-row.// */}
                                            <button className="btn btn-primary">Save</button>
                                            <button className="btn btn-light">Change password</button>
                                            <br /><br /><br /><br /><br /><br />
                                        </div> {/* col.// */}
                                        <div className="col-md">
                                            <img src={avatar1} alt="avatar" className="img-md rounded-circle border" />
                                        </div>  {/* col.// */}
                                    </form>
                                </div> {/* card-body.// */}
                            </div> {/* card .// */}
                        </main> {/* col.// */}


                        {/* Content area End */}

                    </div>
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}


        </React.Fragment>
    )
}

export default ProfileWhishList;