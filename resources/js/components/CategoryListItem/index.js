import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateCategory,
  toggleRemoveCategoryConfirmation,
} from '../../actions/categories';

const removeIcon = require('../../../img/remove.svg');

const CategoryListItem = ({ category }) => {
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
      className="group block font-display border-b border-solid border-gray h-8"
      onClick={() => {
        updateEditing(true);
      }}
    >
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
        <div className="px-1 flex h-8 items-center">
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
    </li>
  );
};

export default CategoryListItem;
