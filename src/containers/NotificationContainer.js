import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Notifications from "../components/Notifications.js"


class NotificationsContainer extends React.Component{

  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount() {
    this.unsubscribe() 
  }

   
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
    // action and reducer handling has to be implemented
  }

  render(){ 
    const { store } = this.context
    const { getState } = store
    const { NotificationRdx} = getState()

    let second, first
    if (NotificationRdx.total === 0){
      second = false, first = true
    }else{
      second = true, first = false
    }

    return(
      <Notifications
        first={first}
        second={second}
        total={NotificationRdx.total}
        hOpen={this.handleNotificationOpen}
        hClose={this.handleNotificationClose}
        hShowAll={this.handleAllNotifications}
      />
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)
