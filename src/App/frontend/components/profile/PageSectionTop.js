import React from 'react';
function PageSectionTop(props) {
    return (
        <React.Fragment>
            {/* ========================= SECTION PAGETOP ========================= */}
            <section className="section-pagetop bg-gray">
                <div className="container">
                    <center><h2 className="title-page">{props.title}</h2></center>
                </div> {/* container //  */}
            </section>
            {/* ========================= SECTION PAGETOP END// ========================= */}
        </React.Fragment>
    )
}

export default PageSectionTop;