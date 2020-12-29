import React from 'react'
import Header from "../../layouts/Header";
import MainSection from './MainSection/index'
import DealSection from './DealSection/index'
import ApparelSection from './ApparelSection/index'
import ElectronicsSection from './ElectronicsSection/index'
import RecommendedItems from './RecommendedItems/index'
import Footer from '../../layouts/Footer'
import SubscribeNewsLater from '../subscribeNewsLater';


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
                <RecommendedItems />
                <article className="my-4">
                    <img src={bannerImg} alt="bannerIg" className="w-100" />
                </article>
            </div>
            <SubscribeNewsLater />
            <Footer />

        </React.Fragment>
    )
}
