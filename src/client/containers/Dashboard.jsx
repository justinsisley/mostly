import React from 'react';
import { AuthConsumer } from '../contexts/auth';
import Dashboard from '../components/Dashboard';

export default () => (
  <AuthConsumer>{auth => <Dashboard {...auth} />}</AuthConsumer>
);
