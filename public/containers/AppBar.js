import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TopBar from "../components/TopBar";
import * as Actions from '../actions';


const AppBar = ({ actions }) => {
  const handleClose = (e) => {
    actions.toggleSideBar({
      opened: false,
    })
  }

  const handleOpen = (e) => {
    actions.toggleSideBar({
      opened: true,
    })
  }

  const handleLogin = (e) => {
    actions.toggleAppBarState({
      simplebar: true,
    })
  }

  const handleSearch = (e) => {
    actions.search({
      searched: true,
    })
  }

  const handleNotificationOpen = (e) => {
    actions.openNotificationMenu({
      showMenu: true,
      anchorEl: e.currentTarget,
    })
  }

  const handleNotificationClose = (e) => {
    actions.closeNotificationMenu({
      showMenu: false,
    })
  }


  const handleSeeAllNotifications = (e) => {
    // action and reducer handling has to be implemented
  }

  const handleUploads = (e) => {
  }

  const handleMessages = (e) => {
  }

  const handleItems = (e) => {
  }

  const handleProfile = (e) => {
  }

  const handleLogout = (e) => {
  }

  return (
    <TopBar
      element={null}
      hClose={handleClose}
      hOpen={handleOpen}
      hLogin={handleLogin}
      hSearch={handleSearch}
      hUploads={handleUploads}
      hMessages={handleMessages}
      hItems={handleItems}
      hProfile={handleProfile}
      hLogout={handleLogout}
      hMenu={handleNotificationOpen}
      hRequestClose={handleNotificationClose}
      hSeeAllNotifications={handleSeeAllNotifications}
    />
  )
}

const mapStateToProps = (state, props) => {
  return {
    state: state
  }
};

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

/**
 * Connect the component to
 * the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
