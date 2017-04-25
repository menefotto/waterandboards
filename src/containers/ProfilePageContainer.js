import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProfilePage from '../components/ProfilePage'
import * as Actions from '../actions'


const ProfilePageContainer = ({ actions, notifications }) => {
  const handleChangeView = (e) => {
    actions.addColons({
      coln: 1
    })
  }

  return(
    <ProfilePage notifications={notifications} hChangeView={handleChangeView} />
  )
}

const mapStateToProps = (state, props) => {
  return {
    notifications: state.NotificationRdx,
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer)

