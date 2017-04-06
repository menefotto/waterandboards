import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBarCustom from "../components/AppBar";
import * as Actions from '../actions';


const AppBarFull = ({ actions }) => {
  const handleClose = (e) => {
    actions.toggleSideBar({
      opened: false,
    })
  };

  const handleOpen = (e) => {
    actions.toggleSideBar({
      opened: true,
    })
  };

  const handleLogin = (e) => {
    actions.toggleLoginState({
      logged: true,
    })
  }

  return (
    <AppBarCustom
      element={<span />}
      opened={true}
      logo={"../images/logo.png"}
      hClose={handleClose}
      hOpen={handleOpen}
      hLogin={handleLogin}
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
export default connect(mapStateToProps, mapDispatchToProps)(AppBarFull);
