import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import MyProfile from './components/profile/MyProfile';
import ProfileAddress from './components/profile/ProfileAddress';
import ProfileOrders from './components/profile/ProfileOrders';

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
            </Switch>
        </React.Fragment>
    )
}

export default Index;