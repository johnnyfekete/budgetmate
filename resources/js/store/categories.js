export default function categories(state = null, action) {
  // Default values
  if (state == null) {
    return {
      loading: true,
      list: [],
      removeCategoryConfirmationOpened: false,
      removableCategory: null,
    };
  }

  // Change state according to action type
  switch (action.type) {
    case 'CATEGORIES_FETCHED':
      return {
        ...state,
        loading: false,
        list: action.payload.data,
      };

    case 'REMOVE_CATEGORY_CONFIRMATION_TOGGLED':
      return {
        ...state,
        removeCategoryConfirmationOpened: !state.removeCategoryConfirmationOpened,
        removableCategory: action.category,
      };

    default:
      return state;
  }
}
