import React from 'react'
import AsideNav from './AsideNav'
import MainSlider from './MainSlider'
import PopularCategories from './PopularCategories'


export default function MainSection() {
    return (
        <React.Fragment>
            {/* ========================= SECTION MAIN  ========================= */}
            <section className="section-main padding-y">
                <main className="card">
                    <div className="card-body">
                        <div className="row">
                            <AsideNav />
                            <MainSlider />
                            <PopularCategories />
                        </div>
                    </div>
                </main>
            </section>
            {/* ========================= SECTION MAIN END// ========================= */}
        </React.Fragment>
    )
}
