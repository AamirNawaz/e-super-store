import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './frontend/components/Home/index';
import MyProfile from './frontend/components/profile/MyProfile';
import ProfileAddress from './frontend/components/profile/ProfileAddress';
import ProfileOrders from './frontend/components/profile/ProfileOrders';
import ProfileWhishList from './frontend/components/profile/ProfileWhishList';
import ProfileSetting from './frontend/components/profile/ProfileSetting';
import CartItems from './frontend/components/cart/CartItems';
import Footer from './frontend/layouts/Footer';
import Header from './frontend/layouts/Header';
import ProductDetails from './frontend/components/product-detail/ProductDetails';
import ShopeProducts from './frontend/components/shope/ShopeProducts';
import Dashboard from './admin/components/Dashboard';
import Login from './admin/components/Login';
import CheckOut from './frontend/components/cart/CheckOut';
import CreateProduct from './admin/components/CreateProduct';
import ProductCategory from './admin/components/ProductCategory';

function Index() {
    return (
        <React.Fragment>
            <Switch>
                {/* Frontend Routes */}
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

                <Route path="/check-out">
                    <Header />
                    <CheckOut />
                    <Footer />
                </Route>

                <Route path="/product-details/:productID">
                    <Header />
                    <ProductDetails />
                    <Footer />
                </Route>

                <Route path="/shope-products">
                    <Header />
                    <ShopeProducts />
                    <Footer />
                </Route>
                {/* Frontend Routes end */}

                {/* Admin Dashboard routes */}
                <Route path="/admin/dashboard">
                    <Dashboard />
                </Route>

                <Route path="/admin/login">
                    <Login />
                </Route>

                <Route path="/admin/logout">
                    <Login />
                </Route>

                <Route path="/admin/create-product">
                    <CreateProduct />
                </Route>

                <Route path="/admin/product-category">
                    <ProductCategory />
                </Route>
                {/* Admin Dashboard routes End */}

                <Route path="*">
                    <h2>404 Not found</h2>
                </Route>

            </Switch>
        </React.Fragment>
    )
}

export default Index;