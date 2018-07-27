import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PrivateRoute = connect(state => ({
  ...state.session,
}))(({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (token) return <Component {...props} />;

      const { location } = props;

      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      );
    }}
  />
));

export const PublicRoute = connect(state => ({
  ...state.session,
}))(({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!token) return <Component {...props} />;

      return <Redirect to="/dashboard" />;
    }}
  />
));
