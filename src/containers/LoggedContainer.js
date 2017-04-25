import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Logged from '../components/Logged'


class LoggedContainer extends React.Component{

  handleSettings = (e) => {
    this.props.actions.toggleSideBar({
      opened: true,
    })
  }

  render(){ 
    return(
      <Logged hSettings={this.handleSettings}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoggedContainer)
