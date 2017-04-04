// All the action names
const LOGIN_STATE = "LOGIN_STATE_ACTION";
const REGISTER_STATE = "REGISTER_STATE_ACTION";

// appbar_toogle toggles the appbar from simple bar to login/logout bar
const APPBAR_TOGGLE = "APPBAR_TOGGLE";

// search bar action
const SEARCH = "SEARCH_ACTION";
// default search performed show the most recents added items
const DEFAULT_SEARCH = "DEFAULT_SEARCH_ACTION";
// scroll action takes care of updating the results
const SEARCH_SCROLL = "SEARCH_SCROLL_ACTION";

// upload and delete and remove action take care or operations on items
const UPLOAD_ITEM = "UPLOAD_ITEM_ACTION";
const DELETE_ITEM = "UPLOAD_ITEM_ACTION";
const REMOVE_ITEM = "UPLOAD_ITEM_ACTION";

// update profile action
const UPDATE_PROFILE = "UPDATE_PROFILE_ACTION";


const toggleLoginState = ({ logged }) => ({
   type: LOGIN_STATE,
   logged,
});

const toggleRegisterState = ({ registered }) => ({
   type: REGISTER_STATE,
   registered,
});

const toggleAppBarState = ({ simplebar }) => ({
  type: APPBAR_TOGGLE,
  simplebar,
});


