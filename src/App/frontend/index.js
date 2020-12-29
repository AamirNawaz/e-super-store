import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import MyProfile from './components/profile/MyProfile';
import ProfileAddress from './components/profile/ProfileAddress';
import ProfileOrders from './components/profile/ProfileOrders';
import ProfileWhishList from './components/profile/ProfileWhishList';
import ProfileSetting from './components/profile/ProfileSetting';
import CartItems from './components/cart/CartItems';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import ProductDetails from './components/product-detail/ProductDetails';

function Index() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>


                <Route path="/profile">
                    <MyProfile />
                </Route>

                <Route path="/profile-address">
                    <ProfileAddress />
                </Route>

                <Route path="/profile-orders">
                    <ProfileOrders />
                </Route>

                <Route path="/profile-wishlist">
                    <ProfileWhishList />
                </Route>

                <Route path="/profile-setting">
                    <ProfileSetting />
                </Route>
                <Route path="/profile-logout">
                    <Home />
                </Route>
                <Route path="/cart-details">
                    <Header />
                    <CartItems />
                    <Footer />
                </Route>

                <Route path="/product-details">
                    <Header />
                    <ProductDetails />
                    <Footer />
                </Route>

                <Route path="*">
                    <h2>404 Not found</h2>
                </Route>

            </Switch>
        </React.Fragment>
    )
}

export default Index;