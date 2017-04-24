import {
  SEARCH,
  PLAY_VIDEO,
  LOGIN_STATE,
  APPBAR_TOGGLE,
  REGISTER_STATE,
  SIDEBAR_STATE,
  SIDEBAR_LOGOUT,
  OPEN_NOTIFICATION_MENU,
  CLOSE_NOTIFICATION_MENU,
  GET_MAIN_ELEMENT,
  SET_MAIN_ELEMENT,
  INCREMENT_LIKES,
  DECREMENT_LIKES,
  CHANGE_COLONS_NUMBER,
} from "../actions"
import { combineReducers } from 'redux' 
import { routerReducer, LOCATION_CHANGE } from 'react-router-redux'


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
        opened: action.opened
      }

    case LOGIN_STATE:
      return {
        ...state,
        logged: action.logged
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

    case LOCATION_CHANGE:
      switch(action.payload.pathname){
        case '/signup':
          return{
            ...state,
            simplebar: true,
            searchbar: false,
          }

        case '/profile':
          return{
            ...state,
            searchbar: false,
          }

        default:
          return{
            ...state,
          }
      }
      

    default:
      return{
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


const GridRdx = (state, action) => {
  switch(action.type){
    case SEARCH:
      return {
        ...state,
      }

    // simplify the nesting
    case PLAY_VIDEO:
      return {
        ...state,
        list: {
          ...state.list,        
          [action.index]: {
            ...state.list[action.index],
            play: action.play
          }
        }
      }

    case INCREMENT_LIKES:
      return{
        ...state,
        list: {
          ...state.list,
          [action.idx]: {
            ...state.list[action.idx],
            likes: state.list[action.idx].likes + 1,
            liked: true,
          }
        }
      }

    case DECREMENT_LIKES:
      return{
        ...state,
        list: {
          ...state.list,
          [action.idx]: {
            ...state.list[action.idx],
            likes:  state.list[action.idx].likes - 1,
            liked: false,
          }
        }

      }

    case CHANGE_COLONS_NUMBER:
      let colsn, dimensions
      if (state.cols === 1){
        colsn = state.cols + action.coln
        dimensions = {w:480,h:360, n:"hqdefault"}
      } else if(state.cols === 2){
        colsn = state.cols + action.coln
        dimensions = {w:320, h:180, n:"default"}
      } else if(state.cols === 3){
        colsn = 1
        dimensions = {w:640,h:480, n:"sddefault"}
      }

      return{
        ...state,
        cols: colsn,
        size: dimensions,
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
  AppBarRdx,
  LoginPageRdx,
  NotificationRdx,
  GridRdx,
  SideBarRdx,
  routerReducer,
})


export default rootReducer
