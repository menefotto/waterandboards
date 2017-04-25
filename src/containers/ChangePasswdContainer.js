import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ChangePasswd from '../components/ChangePasswd.js'
import * as Actions from '../actions'



const ChangePasswdContainer = ({ actions }) => {

  const handleChange = (e) => {
    // do stuff
  }

  return(
    <ChangePasswd hChange={handleChange} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswdContainer)

