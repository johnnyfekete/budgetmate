import React from 'react';
import Sidebar from '../../components/Sidebar';
import CategoryList from '../../components/CategoryList';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../actions/categories';

const Dashboard = () => {
  const dispatch = useDispatch();

  dispatch(fetchCategories());

  return (
    <div className="flex">
      <Sidebar active="dashboard" />

      <div>
        <CategoryList />
      </div>
    </div>
  );
};

export default Dashboard;
