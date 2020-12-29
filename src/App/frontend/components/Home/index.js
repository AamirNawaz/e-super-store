import React from 'react'
import Header from "../../layouts/Header";
import MainSection from './MainSection/index'
import DealSection from './DealSection/index'
import ApparelSection from './ApparelSection/index'
import ElectronicsSection from './ElectronicsSection/index'
import Quotation from './Quotation/index'
import RecommendedItems from './RecommendedItems/index'
import ServiceSection from './ServiceSection/index'
import RegionSection from './RegionSection/index'
import Footer from '../../layouts/Footer'


import bannerImg from '../../../assets/images/banners/ad-sm.png';


export default function index() {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <MainSection />
                <DealSection />
                <ApparelSection />
                <ElectronicsSection />
                <Quotation />
                <RecommendedItems />
                <ServiceSection />
                <RegionSection />
                <article className="my-4">
                    <img src={bannerImg} alt="bannerIg" className="w-100" />
                </article>

            </div>

            {/* ========================= SECTION SUBSCRIBE  ========================= */}
            <section className="section-subscribe padding-y-lg">
                <div className="container">
                    <p className="pb-2 text-center text-white">Delivering the latest product trends and industry news straight to your inbox</p>
                    <div className="row justify-content-md-center">
                        <div className="col-lg-5 col-md-6">
                            <form className="form-row">
                                <div className="col-md-8 col-7">
                                    <input className="form-control border-0" placeholder="Your Email" type="email" />
                                </div> {/* col.// */}
                                <div className="col-md-4 col-5">
                                    <button type="submit" className="btn btn-block btn-warning"> <i className="fa fa-envelope" /> Subscribe </button>
                                </div> {/* col.// */}
                            </form>
                            <small className="form-text text-white-50">We’ll never share your email address with a third-party. </small>
                        </div> {/* col-md-6.// */}
                    </div>
                </div>
            </section>
            {/* ========================= SECTION SUBSCRIBE END// ========================= */}

            <Footer />

        </React.Fragment>
    )
}
