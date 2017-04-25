import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import NotificationPage from '../components/NotificationPage'


class NotificationPageContainer extends React.Component{

  // implement all handling stuff here
  
  render(){ 
    return(
      <NotificationPage notifications={this.props.notifications}/>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPageContainer)
