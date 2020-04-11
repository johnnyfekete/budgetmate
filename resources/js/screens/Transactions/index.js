import React from 'react';
import Sidebar from '../../components/Sidebar';

const Transactions = () => (
  <div className="flex">
    <Sidebar active="transactions" />
    <div>Transactions</div>
  </div>
);

export default Transactions;
