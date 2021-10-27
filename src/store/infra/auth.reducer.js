import * as actionTypes from "./auth.actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = { user: null, isLoadingUser: false }, action) {
  switch (action.type) {
    case actionTypes.STORE_USER:
      return {
        ...state,
        isLoadingUser: false,
        user: action.payload,
      };
    case actionTypes.LOADING_USER:
      return {
        ...state,
        isLoadingUser: true,
      };
    case actionTypes.USER_EXPIRED:
    case actionTypes.STORE_USER_ERROR:
    case actionTypes.USER_SIGNED_OUT:
      return {
        ...state,
        user: null,
        isLoadingUser: false,
      };
    default:
      return state;
  }
}


