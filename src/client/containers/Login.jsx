import React from 'react';
import { AuthConsumer } from '../contexts/auth';
import { RouterConsumer } from '../contexts/router';
import Login from '../components/Login';

export default () => (
  <RouterConsumer>
    {router => (
      <AuthConsumer>
        {auth => <Login history={router.history} {...auth} />}
      </AuthConsumer>
    )}
  </RouterConsumer>
);
