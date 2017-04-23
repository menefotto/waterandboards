import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TopBar from '../components/TopBar'
import SignUp from "../containers/SignUp.js"
import Profile from '../components/Profile.js'
import * as Actions from '../actions'


class AppBar extends React.PureComponent{

  handleClose = (e) => {
    actions.toggleSideBar({
      opened: false,
    })
  }

  handleOpen = (e) => {
    actions.toggleSideBar({
      opened: true,
    })
  }

  handleLogin = (e) => {
    actions.setMainElement({
      element: <SignUp />
    })

    actions.toggleAppBarState({
      simplebar: true,
    })
  }

  handleSearch = (e) => {
    actions.search({
      searched: true,
    })
  }

  handleNotificationOpen = (e) => {
    e.preventDefault()

    actions.openNotificationMenu({
      showMenu: true,
      anchorEl: e.currentTarget,
    })
  }

  handleNotificationClose = (e) => {
    actions.closeNotificationMenu({
      showMenu: false,
    })
  }

  handleSeeAllNotifications = (e) => {
    // action and reducer handling has to be implemented
  }

  handleItems = (e) => {
  }

  handleUploads = (e) => {
  }

  handleMessages = (e) => {
  }

  handleProfile = (e) => {
    actions.setMainElement({
      element: <Profile />
    })

    actions.toggleSideBar({
      opened: false,
    })
  }

  handleLogout = (e) => {
    actions.logoutSideBar({
      logoutShow: true,
    })
  }

  render(){
    return (
      <TopBar
        element={null}
        hClose={this.handleClose}
        hOpen={this.handleOpen}
        hLogin={this.handleLogin}
        hSearch={this.handleSearch}
        hUploads={this.handleUploads}
        hMessages={this.handleMessages}
        hItems={this.handleItems}
        hProfile={this.handleProfile}
        hLogout={this.handleLogout}
        hMenu={this.handleNotificationOpen}
        hRequestClose={this.handleNotificationClose}
        hSeeAllNotifications={this.handleSeeAllNotifications}
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
export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
