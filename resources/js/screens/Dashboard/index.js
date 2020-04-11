import React from 'react';
import Sidebar from '../../components/Sidebar';
import CategoryList from '../../components/CategoryList';
import AllocationChart from '../../components/AllocationChart';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../actions/categories';

const Dashboard = () => {
  const dispatch = useDispatch();

  dispatch(fetchCategories());

  return (
    <div className="flex">
      <Sidebar active="dashboard" />

      <div className="flex w-full ml-12 mr-4">
        <div className="w-1/2">
          <CategoryList />
        </div>
        <div className="w-1/2">
          <AllocationChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
