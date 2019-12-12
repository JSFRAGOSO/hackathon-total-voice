import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Login from './pages/Login/index';
import NewAdmin from './pages/NewAdmin';
import Dashboard from './pages/Dashboard';
import Order from './pages/NewOrder';
import UpdateOrder from './pages/UpdateOrder';



export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Login}/>
                <Route path="/new/user" exact component = {NewAdmin}/>
                <Route path="/dashboard" exact component= {Dashboard}/>
                <Route path="/new/order" exact component= {Order}/>
                <Route path="/update/order/:orderId" exact component= {UpdateOrder}/>
            </Switch>
        </BrowserRouter>
    )
}