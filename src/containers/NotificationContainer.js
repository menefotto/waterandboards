import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Notifications from "../components/Notifications.js"


class NotificationsContainer extends React.Component{

  handleNotificationOpen = (e) => {
    e.preventDefault()

    this.props.actions.openNotificationMenu({
      showMenu: true,
      anchorEl: e.currentTarget,
    })
  }

  handleNotificationClose = (e) => {
    this.props.actions.closeNotificationMenu({
      showMenu: false,
    })
  }

  handleAllNotifications = (e) => {
  }

  render(){ 
    let second, first
    if (this.props.notificationTotal === 0){
      second = false, first = true
    }else{
      second = true, first = false
    }

    return(
      <Notifications
        first={first}
        second={second}
        hOpen={this.handleNotificationOpen}
        total={this.props.notificationTotal}
        hClose={this.handleNotificationClose}
        hShowAll={this.handleAllNotifications}
      />
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    notificationTotal: state.NotificationRdx.total,
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)
