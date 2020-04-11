import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createCategory,
  toggleRemoveCategoryConfirmation,
  removeCategory,
} from '../../actions/categories';
import CategoryListItem from '../CategoryListItem';
import Confirmation from '../Confirmation';

import './style.css';

const addIcon = require('../../../img/add.svg');

const CategoryList = () => {
  const loading = useSelector(state => state.categories.loading);
  const list = useSelector(state => state.categories.list);
  const removeCategoryConfirmationOpened = useSelector(
    state => state.categories.removeCategoryConfirmationOpened
  );
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
        className="category-add mt-2 transition duration-500 ease-in-out cursor-pointer"
        src={addIcon}
        alt="Add new category"
        onClick={() => dispatch(createCategory())}
      />

      <Confirmation
        opened={removeCategoryConfirmationOpened}
        title="Confirmation"
        question="Are you sure you want to remove this category?"
        color="red"
        buttonText="Yes, remove it!"
        onToggle={() => dispatch(toggleRemoveCategoryConfirmation())}
        onConfirm={() => dispatch(removeCategory())}
      />
    </div>
  );
};

export default CategoryList;
