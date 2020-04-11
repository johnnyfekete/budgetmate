import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Route from './Route';

const Dashboard = lazy(() => import('../screens/Dashboard'));
const Transactions = lazy(() => import('../screens/Transactions'));
const Error404 = lazy(() => import('../screens/Error404'));

const Routes = () => {
  const loading = useSelector(state => state.auth.loading);

  if (loading) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/transactions" component={Transactions} />
        <Route component={Error404} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
