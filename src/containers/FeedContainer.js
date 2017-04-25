import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Feed from '../components/Feed'
import * as Actions from '../actions'



const FeedContainer = ({ actions }) => {
  const handleChangeView = (e) => {
    actions.addColons({
      coln: 1
    })
  }

  return(
    <Feed hChangeView={handleChangeView} />
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
export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)

