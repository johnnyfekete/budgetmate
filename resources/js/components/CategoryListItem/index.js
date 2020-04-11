import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../actions/categories';

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
      className="block font-display border-b border-solid border-gray h-8"
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
        <div className="px-1 flex h-8 items-center">{name}</div>
      )}
    </li>
  );
};

export default CategoryListItem;
