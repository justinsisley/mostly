import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../../containers/Routes';
import Dashboard from '../../containers/Dashboard';
import Login from '../../containers/Login';

const Router = () => (
  <Switch>
    <PublicRoute exact path="/login" component={Login} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />

    {/* Redirect all unmatched routes to login */}
    <Redirect to="/login" />
  </Switch>
);

export default Router;
