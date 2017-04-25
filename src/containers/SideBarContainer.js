import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SideBar from '../components/SideBar'
import * as Actions from '../actions'


const SideBarContainer = ({ actions }) => {

  const handleClose = (e) => {
    e.preventDefault()
    actions.toggleSideBar({
      opened: false,
    })
  }

  const handleItems = (e) => {
  }

  const handleUploads = (e) => {
  }

  const handleMessages = (e) => {
  }

  const handleProfile = (e) => {
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
    <SideBar
      hItems={handleItems}
      hClose={handleClose}
      hLogout={handleLogout}
      hProfile={handleProfile}
      hUploads={handleUploads}
      hMessages={handleMessages}
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
export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer)
