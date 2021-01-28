import React from 'react'
import { connect } from 'react-redux';
import Header from "../../layouts/Header";
import MainSection from './MainSection/index'
import DealSection from './DealSection/index'
// import ApparelSection from './ApparelSection/index'
import ElectronicsSection from './ElectronicsSection/index'
import RecommendedItems from './RecommendedItems/index'
import Footer from '../../layouts/Footer'
import SubscribeNewsLater from '../subscribeNewsLater';


import bannerImg from '../../../assets/images/banners/ad-sm.png';
import { fetchProducts } from '../../../redux/reducer/shope/shopeActions';
import { getAllCategories } from '../../../redux/reducer/categories/categoryActions';
import { sliders } from '../../../redux/reducer/slider/sliderActions';


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount = () => {
        this.props.fetchProductsCall();
        this.props.fetchAllCategories();
        this.props.fetchSliders();
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <MainSection />
                    <DealSection />
                    {/* <ApparelSection /> */}
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
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsCall: () => dispatch(fetchProducts()),
        fetchAllCategories: () => dispatch(getAllCategories()),
        fetchSliders: () => dispatch(sliders()),
    }
}
export default connect(null, mapDispatchToProps)(Index);
