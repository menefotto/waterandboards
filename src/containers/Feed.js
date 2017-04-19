import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../components/Grid'
import * as Actions from '../actions'



const Feed = ({ actions }) => {
  const handleChangeView = (e) => {
    actions.addColons({
      coln: 1
    })
  }

  return(
    <Grid hChangeView={handleChangeView} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Feed)

