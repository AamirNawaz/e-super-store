import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import MyProfile from './components/profile/MyProfile';

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
            </Switch>
        </React.Fragment>
    )
}

export default Index;