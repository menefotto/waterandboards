import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TopBar from '../components/TopBar'
import * as Actions from '../actions'


const TopBarContainer = ({ actions }) => {

  const handleLogo = (e) => {
    location.reload()
  }

  return (
    <TopBar hLogo={handleLogo} />
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
export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer)
