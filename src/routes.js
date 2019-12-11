import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/index';
import NewAdmin from './pages/NewAdmin';
import Dashboard from './pages/Dashboard';



export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Login}/>
                <Route path="/new/user" exact component = {NewAdmin}/>
                <Route path="/dashboard" exact component= {Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}