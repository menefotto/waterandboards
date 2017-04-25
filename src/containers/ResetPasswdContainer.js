import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ResetPasswd from '../components/ResetPasswd.js'
import * as Actions from '../actions'



const ResetPasswdContainer = ({ actions }) => {

  const handleReset = (e) => {
    // do stuff
  }

  return(
    <ResetPasswd hReset={handleReset} />
  )
}


const mapStateToProps = (state, props) => {
  return {
    feed: state.FeedRdx,
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
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswdContainer)

