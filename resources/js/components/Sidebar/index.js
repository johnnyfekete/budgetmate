import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const logo = require('../../../img/logo.svg');

const Sidebar = ({ active }) => {
  return (
    <div className="w-64 mr-8">
      <h1 className="fixed top-0 w-56 ml-8 mt-6">
        <img src={logo} alt="BudgetMate" />
      </h1>
      <div className="sidebar fixed top-0 bottom-0 shadow-lg rounded-lg bg-blue w-64 mt-20 mb-4 mx-4 p-4">
        <nav>
          <ul className="font-display">
            <MenuItem
              to="/"
              title="Dashboard"
              active={active === 'dashboard'}
            />
            <MenuItem
              to="/transactions"
              title="Transactions"
              active={active === 'transactions'}
            />
            <MenuItem
              to="/calendar"
              title="Calendar"
              active={active === 'calendar'}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

const MenuItem = ({ to, title, active }) => (
  <li className="relative">
    {active && (
      <div className="absolute bg-yellow w-1 rounded-r-sm h-full left-0 top-0 bottom-0 -ml-4" />
    )}
    <Link
      to={to}
      className="block transition duration-500 ease-in-out -mx-2 px-2 py-2 text-white hover:bg-transparent-white rounded"
    >
      {title}
    </Link>
  </li>
);

export default Sidebar;
