import {
  LOGIN_STATE,
  APPBAR_TOGGLE,
  REGISTER_STATE,
  SIDEBAR_STATE,
} from "../actions";

import { combineReducers } from 'redux'; 

// appbar type
const AppBarReducer = (state = false, action) => {
  switch(action.type){
    case APPBAR_TOGGLE:
      return {
        ...state,
        simplebar: !state.simplebar
    };

    case SIDEBAR_STATE:
      return {
        ...state,
        opened: !state.opened
      };


    case LOGIN_STATE:

      return {
        ...state,
        logged: !state.logged
      };

    default:
      return {
        ...state,
      };
  }
};

// login page reducer
const LoginPageReducer = (state, action) => {
  switch(action.type){
    case REGISTER_STATE:
      const registered = state.registered ? false: true;

      return {
        ...state,
        registered,
      };
    default:
      return {
        ...state,
      };
  }
}

const rootReducer = combineReducers({
  AppBarReducer,
  LoginPageReducer,
})

export default rootReducer;
