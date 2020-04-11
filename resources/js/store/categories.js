export default function categories(state = null, action) {
  // Default values
  if (state == null) {
    return {
      loading: true,
      list: [],
    };
  }

  // Change state according to action type
  switch (action.type) {
    case 'CATEGORIES_FETCHED':
      return {
        ...state,
        loading: false,
        list: action.payload.data
      };

    default:
      return state;
  }
}
