import React from 'react';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => (
  <div className="flex">
    <Sidebar active="dashboard" />

    <div>Dashboard</div>
  </div>
);

export default Dashboard;
