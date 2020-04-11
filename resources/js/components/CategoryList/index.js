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
    <div className="w-full category-list">
      <h2 className="font-display text-lg mt-10 font-bold">Categories</h2>
      <ul className="mt-8">
        <li className="flex">
          <div className="w-64"></div>

          <div className="planned-header w-32 px-2 pt-2 bg-papaya rounded-t text-center">
            Planned
            <div className="w-auto h-2 mx-2 border-solid border-gray border-b" />
          </div>

          <div className="actual-header ml-2 w-32 px-2 pt-2 bg-blue text-white rounded-t text-center">
            Actual
            <div className="w-auto h-2 mx-2 border-solid border-gray border-b" />
          </div>
        </li>

        {list.map((category, index) => (
          <CategoryListItem category={category} key={category.id} index={index} />
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
