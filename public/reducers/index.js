import {
  SEARCH,
  LOGIN_STATE,
  APPBAR_TOGGLE,
  REGISTER_STATE,
  SIDEBAR_STATE,
  SIDEBAR_LOGOUT,
  OPEN_NOTIFICATION_MENU,
  CLOSE_NOTIFICATION_MENU,
  GET_MAIN_ELEMENT,
  SET_MAIN_ELEMENT,
} from "../actions"
import { combineReducers } from 'redux' 


// appbar type
const AppBarRdx = (state = false, action) => {
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


const NotificationRdx = ( state, action) => {
  switch(action.type){
    default:
      return {
        ...state,
      }
  }
}


// login page reducer
const LoginPageRdx = (state, action) => {
  switch(action.type){
    case REGISTER_STATE:
      const register = state.register ? false: true

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


const BodyRdx = (state, action) => {
  switch(action.type){
    case GET_MAIN_ELEMENT:
      return {
        ...state,
        element: state.element,
      }

    case SET_MAIN_ELEMENT:
      return {
        ...state,
        element: action.element,
      }

    default:
      return {
        ...state,
      }
  }
}

const GridRdx = (state, action) => {
  switch(action.type){
    case SEARCH:
      return {
        ...state,
      }

    default:
      return {
        ...state,
      }
  }
}


const SideBarRdx = (state, action) => {
  switch(action.type){
    case SIDEBAR_LOGOUT:
      return {
        ...state,
        logoutShow: action.logoutShow,
      }

    default:
      return {
        ...state,
      }
  }
}


const rootReducer = combineReducers({
  BodyRdx,
  AppBarRdx,
  LoginPageRdx,
  NotificationRdx,
  GridRdx,
  SideBarRdx,
})


export default rootReducer
