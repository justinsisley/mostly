import React from 'react';
import { AuthConsumer } from '../contexts/auth';
import Login from '../components/Login';

export default () => (
  <AuthConsumer>
    {auth => <Login {...auth} />}
  </AuthConsumer>
);
