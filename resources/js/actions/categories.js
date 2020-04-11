/* eslint import/prefer-default-export: 0 */
import axios from 'axios';

// Fetch categories
export function fetchCategories() {
  const response = axios.get('/api/categories');
  return { type: 'CATEGORIES_FETCHED', payload: response };
}

// Create categories
export function createCategory() {
  return dispatch => {
    axios.post('/api/categories').then(response => {
      dispatch({ type: 'CATEGORY_CREATED', payload: response });
      dispatch(fetchCategories());
    });
  };
}

// Update category
export function updateCategory(id, data) {
  return dispatch => {
    axios.patch(`/api/categories/${id}`, data).then(response => {
      dispatch({ type: 'CATEGORY_UPDATED', payload: response });
      dispatch(fetchCategories());
    });
  };
}
