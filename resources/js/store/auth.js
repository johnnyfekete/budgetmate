export default function auth(state = null, action) {
  // Default values
  if (state == null) {
    return {
      loading: false,
      authenticated: false,
      user: null,
    };
  }

  // Change state according to action type
  switch (action.type) {
    case 'NOT_AUTHENTICATED':
      return {
        ...state,
        loading: false,
        authenticated: false,
        user: null,
      };

    case 'LOGIN_SUCCEEDED':
      return {
        ...state,
        loading: false,
        authenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
}
