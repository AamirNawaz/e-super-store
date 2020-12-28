import React from 'react';
import Header from '../../layouts/Header';
import AsideNav from './AsideNav';
import PageSectionTop from './PageSectionTop';

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


                        {/* Content area End */}

                    </div>
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}


        </React.Fragment>
    )
}

export default ProfileWhishList;