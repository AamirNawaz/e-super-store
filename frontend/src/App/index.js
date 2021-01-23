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
import CreateProduct from './admin/components/products/CreateProduct';
import UserLogin from './frontend/components/Auth/UserLogin';
import UserRegister from './frontend/components/Auth/UserRegister';
import UserResetPassword from './frontend/components/Auth/UserResetPassword';
import Logout from './admin/components/Logout';
import ProductList from './admin/components/products/ProductsList';
import UsersList from './admin/components/users/UsersList';
import CategoriesList from './admin/components/categories/CategoriesList';
import CreateProductUrl from './admin/components/products/CreateProductUrl';
import OrderPlaced from './frontend/components/cart/OrderPlaced';
import OrdersList from './admin/components/orders/OrdersList';
import OrderDetails from './admin/components/orders/OrderDetails';
import UserLogout from './frontend/components/Auth/UserLogout';


function Index() {
    return (
        <React.Fragment>
            <Switch>
                {/* Frontend Routes */}
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/user/login">
                    <Header />
                    <UserLogin />
                    <Footer />
                </Route>

                <Route path="/user/register">
                    <Header />
                    <UserRegister />
                    <Footer />
                </Route>

                <Route path="/user/forgot-password">
                    <Header />
                    <UserResetPassword />
                    <Footer />
                </Route>

                <Route path="/user/profile">
                    <MyProfile />
                </Route>

                <Route path="/user/profile-address">
                    <ProfileAddress />
                </Route>

                <Route path="/user/profile-orders">
                    <ProfileOrders />
                </Route>

                <Route path="/user/profile-wishlist">
                    <ProfileWhishList />
                </Route>

                <Route path="/user/profile-setting">
                    <ProfileSetting />
                </Route>
                <Route path="/user/logout">
                    <UserLogout />
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

                <Route path="/order-placed/:orderID">
                    <Header />
                    <OrderPlaced />
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

                {/****************** Admin Dashboard routes *********************/}
                <Route path="/admin/dashboard">
                    <Dashboard />
                </Route>

                <Route path="/admin/login">
                    <Login />
                </Route>

                <Route path="/admin/logout">
                    <Logout />
                </Route>

                <Route path="/admin/create-product">
                    <CreateProduct />
                </Route>

                <Route path="/admin/create-product-url">
                    <CreateProductUrl />
                </Route>
                <Route path="/admin/product-list">
                    <ProductList />
                </Route>

                <Route path="/admin/categories-list">
                    <CategoriesList />
                </Route>

                <Route path="/admin/orders-list">
                    <OrdersList />
                </Route>

                <Route path="/admin/order-details/:orderId">
                    <OrderDetails />
                </Route>

                <Route path="/admin/users">
                    <UsersList />
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