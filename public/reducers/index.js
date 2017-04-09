import {
  LOGIN_STATE,
  APPBAR_TOGGLE,
  REGISTER_STATE,
  SIDEBAR_STATE,
  OPEN_NOTIFICATION_MENU,
  CLOSE_NOTIFICATION_MENU,
} from "../actions";

import { combineReducers } from 'redux'; 

// appbar type
const AppBarReducer = (state = false, action) => {
  switch(action.type){
    case APPBAR_TOGGLE:
      return {
        ...state,
        simplebar: !state.simplebar
      }

    case SIDEBAR_STATE:
      return {
        ...state,
        opened: !state.opened
      }

    case LOGIN_STATE:
      return {
        ...state,
        logged: !state.logged
      }

    case OPEN_NOTIFICATION_MENU:
      return {
        ...state,
        showMenu: action.showMenu,
        anchorEl: action.anchorEl,
      }


    case CLOSE_NOTIFICATION_MENU:
      return {
        ...state,
        showMenu: action.showMenu,
      }


    default:
      return {
        ...state,
      }
  }
}

const NotificationsReducer = ( state, action) => {
  switch(action.type){
    default:
      return {
        ...state,
      }
  }
}


// login page reducer
const LoginPageReducer = (state, action) => {
  switch(action.type){
    case REGISTER_STATE:
      const register = state.register ? false: true;

      return {
        ...state,
        register,
      }

    default:
      return {
        ...state,
      }
  }
}

const rootReducer = combineReducers({
  AppBarReducer,
  LoginPageReducer,
  NotificationsReducer,
})

export default rootReducer;
