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


export const search = ({ searched }) => ({
  type: SEARCH,
  searched,
});

export const loginState = ({ logged }) => ({
   type: LOGIN_STATE,
   logged,
});

export const registerState = ({ register }) => ({
   type: REGISTER_STATE,
   register,
});

export const toggleAppBarState = ({ simplebar }) => ({
  type: APPBAR_TOGGLE,
  simplebar,
});

export const toggleSideBar = ({ opened }) => ({
  type: SIDEBAR_STATE,
  opened,
});
