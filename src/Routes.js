import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contacts from './contactList/Contacts';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/contacts" component={Contacts} />
            </Switch>

        </BrowserRouter>
    );
};

export default Routes;