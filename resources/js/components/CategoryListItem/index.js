import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateCategory,
  toggleRemoveCategoryConfirmation,
} from '../../actions/categories';
import formatCurrency from '../../utils/format-curreny';
import getColor from '../../utils/get-color';

const removeIcon = require('../../../img/remove.svg');

const CategoryListItem = ({ category, index }) => {
  const [editing, updateEditing] = useState(false);
  const [name, setName] = useState(category.name);
  const inputEl = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editing) {
      inputEl.current.focus();
    }
  }, [editing]);

  return (
    <li
      className="flex font-display border-b border-solid border-gray h-8"
      onClick={() => {
        updateEditing(true);
      }}
    >
      <div className="group w-64">
        {editing ? (
          <input
            type="text"
            defaultValue={name}
            ref={inputEl}
            onBlur={e => {
              setName(e.target.value);
              dispatch(updateCategory(category.id, { name: e.target.value }));
              updateEditing(false);
            }}
            className="h-8 w-full border-b border-solid border-gray px-1"
          />
        ) : (
          <div className="flex h-8 items-center">
            <div className="w-3 h-3 mr-2 rounded-full bg-link-color" style={{
              backgroundColor: getColor(index)
            }} />
            <span>{name}</span>
            <img
              className="opacity-0 group-hover:opacity-100 ml-auto transition duration-500 ease-in-out cursor-pointer"
              src={removeIcon}
              alt="Remove category"
              onClick={e => {
                e.stopPropagation();
                dispatch(toggleRemoveCategoryConfirmation(category));
              }}
            />
          </div>
        )}
      </div>
      <div className="w-32 flex h-8 items-center font-bold bg-papaya justify-end px-2 border-b border-solid border-gray">
        {category.monthly_budgets &&
          category.monthly_budgets.length > 0 &&
          '€ ' + formatCurrency(category.monthly_budgets[0].budget, 2, '.', ',')}
      </div>
      <div className="w-32 ml-2 flex h-8 items-center font-bold text-white bg-blue justify-end px-2 border-b border-solid border-dark-gray">
        € 0.00
      </div>
    </li>
  );
};

export default CategoryListItem;
