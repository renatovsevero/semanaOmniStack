import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './Logon/';
import Register from './Register/';
import Profiles from './Profiles/';
import Newincidents from './NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Logon} />
               <Route path="/register" component={Register} />
               <Route path="/profiles" component={Profiles} />
               <Route path="/incidents/new" component={Newincidents} />
            </Switch>
            
        </BrowserRouter>
    );
}