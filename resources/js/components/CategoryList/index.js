import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCategory } from '../../actions/categories';
import CategoryListItem from '../CategoryListItem';

import './style.css';

const addIcon = require('../../../img/add.svg');

const CategoryList = () => {
  const loading = useSelector(state => state.categories.loading);
  const list = useSelector(state => state.categories.list);
  const dispatch = useDispatch();

  if (loading) return <div>Loading</div>;

  return (
    <div className="w-64 category-list">
      <h2 className="font-display text-lg mt-10">Categories</h2>
      <ul className="mt-8">
        {list.map(category => (
          <CategoryListItem category={category} key={category.id} />
        ))}
      </ul>

      <img
        className="category-add mt-2 transition duration-500 ease-in-out"
        src={addIcon}
        alt="Add new category"
        onClick={() => dispatch(createCategory())}
      />
    </div>
  );
};

export default CategoryList;
