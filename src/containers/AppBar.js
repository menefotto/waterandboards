import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import withRouter from 'react-router-dom/withRouter'
import TopBar from '../components/TopBar'
import SignUp from "../containers/SignUp.js"
import Profile from '../components/Profile.js'
import * as Actions from '../actions'


const AppBarRouted = ({ actions, location }) => {
  const handleClose = (e) => {
    e.preventDefault()
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

  const handleLogo = (e) => {
    if(location.pathname !== "/signup"){
      console.log(location.pathname)
      //window.location.reload()
    }else{
      actions.registerState({
        register: true,
      })
    }
  }

  const handleSearch = (e) => {
    actions.search({
      searched: true,
    })
  }

  const handleNotificationOpen = (e) => {
    e.preventDefault()

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

  const handleItems = (e) => {
  }

  const handleUploads = (e) => {
  }

  const handleMessages = (e) => {
  }

  const handleProfile = (e) => {
    actions.setMainElement({
      element: <Profile />
    })

    actions.toggleSideBar({
      opened: false,
    })
  }

  const handleLogout = (e) => {
    actions.logoutSideBar({
      logoutShow: true,
    })
  }

  return (
    <TopBar
      element={null}
      hClose={handleClose}
      hOpen={handleOpen}
      hLogin={handleLogin}
      hLogo={handleLogo}
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


const AppBar = withRouter(AppBarRouted)


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
