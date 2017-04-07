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
    actions.toggleLoginState({
      logged: true,
    })
  }

  const handleSearch = (e) => {
    actions.search({
      searched: true,
    })
  }


  return (
    <TopBar
      hClose={handleClose}
      hOpen={handleOpen}
      hLogin={handleLogin}
      hSearch={handleSearch}
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
