import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../containers/Grid.js'
import Message from '../components/Message.js'
import * as Actions from '../actions'


const Logout = ({ actions }) => {
  const handleOk = (e) => {
    actions.loginState({
      logged: false,
    })

    actions.setMainElement({
      element: <Grid />,
    })

    actions.toggleSideBar({
      opened: false,
    })

    actions.logoutSideBar({
      logoutShow: false,
    })
  }

  const handleCancel = (e) => {
    actions.logoutSideBar({
      logoutShow: false,
    })
  }

  return(
    <Message 
      hOk={handleOk}
      hCancel={handleCancel}
      rButtonLabel={"Logout"}
      lButtonLabel={"Cancel"}
      title={"Are you sure you want to logout?"}
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
export default connect(mapStateToProps, mapDispatchToProps)(Logout)
