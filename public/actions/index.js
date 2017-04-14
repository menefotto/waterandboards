// All the action names
export const LOGIN_STATE = "LOGIN_STATE_ACTION";
export const REGISTER_STATE = "REGISTER_STATE_ACTION";
export const SIDEBAR_STATE = "SIDEBAR_STATE_ACTION";
// appbar_toogle toggles the appbar from simple bar to login/logout bar
export const APPBAR_TOGGLE = "APPBAR_TOGGLE";
// search bar action
export const SEARCH = "SEARCH_ACTION";
// default search performed show the most recents added items
export const DEFAULT_SEARCH = "DEFAULT_SEARCH_ACTION";
// scroll action takes care of updating the results
export const SEARCH_SCROLL = "SEARCH_SCROLL_ACTION";
// upload and delete and remove action take care or operations on items
export const UPLOAD_ITEM = "UPLOAD_ITEM_ACTION";
export const DELETE_ITEM = "UPLOAD_ITEM_ACTION";
// update profile action
export const UPDATE_PROFILE = "UPDATE_PROFILE_ACTION";

// add and update notifications status
export const OPEN_NOTIFICATION_MENU = "OPEN_NOTIFICATION_MENU";
export const CLOSE_NOTIFICATION_MENU = "CLOSE_NOTIFICATION_MENU";
export const ADD_NOTIFICATION = "ADD_NEW_NOTIFICATION";
export const STATUS_NOTIFICATION = "CHANGE_NOTIFICATION_STATUS";

// main element to display
export const GET_MAIN_ELEMENT = "GET_MAIN_ELEMENT";
export const SET_MAIN_ELEMENT = "SET_MAIN_ELEMENT";

export const setMainElement = ({ element }) => ({
  type: SET_MAIN_ELEMENT,
  element,
});

export const getMainElement = ({ element }) => ({
  type: GET_MAIN_ELEMENT,
  element,
});

// handle function from the search bar
export const search = ({ searched }) => ({
  type: SEARCH,
  searched,
});

// login state handles what to show on the left side of the app bar
export const loginState = ({ logged }) => ({
   type: LOGIN_STATE,
   logged,
});

// toggle from login to register page
export const registerState = ({ register }) => ({
   type: REGISTER_STATE,
   register,
});

// toggle sidebar type simple or full
export const toggleAppBarState = ({ simplebar }) => ({
  type: APPBAR_TOGGLE,
  simplebar,
});

// change sidebar from open to close and viceversa
export const toggleSideBar = ({ opened }) => ({
  type: SIDEBAR_STATE,
  opened,
});

// add notification to notification menu
export const addNotification = ({ text, status }) => ({
  type: ADD_NOTIFICATION,
  text,
  status,
});

// change notification status
export const changeNotificationStatus = ({ idx, status }) => ({
  type: ADD_NOTIFICATION,
  idx,
  status,
});

// open notification menu visibility
export const openNotificationMenu = ({ showMenu, anchorEl }) => ({
  type: OPEN_NOTIFICATION_MENU,
  showMenu,
  anchorEl,
});

// close notification menu visibility
export const closeNotificationMenu = ({ showMenu }) => ({
  type: CLOSE_NOTIFICATION_MENU,
  showMenu,
});
