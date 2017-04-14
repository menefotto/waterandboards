import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Notifications from "../components/NotificationMenu.js"
import * as Actions from '../actions'


const Notifications = ({ actions, element }) => {
  const handleClose = (e) => {
    actions.toggleSideBar({
      showNotificationMenu: false,
    })
  }

  const handleOpen = (e) => {
    actions.toggleSideBar({
      showNotificationMenu: true,
      anchorEl: e.currentTarget,
    })
  }

  const handleSeeAllActivity = (e) => {
    // action and reducer handling has to be implemented
  }


  return(
    <Notifications 
      hRequestClose={handleClose}
      handleSeeAllActivity={handleSeeAllActivity}
    />
  )
}


const mapStateToProps = (state, props) => {
  return {
    state: state
  }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

/**
 * Connect the component to
 * the Redux store.
 */

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
