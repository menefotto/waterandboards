import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Feed from '../components/Feed'
import * as Actions from '../actions'



const FeedContainer = ({ actions, feed}) => {
  const handleChangeView = (e) => {
    actions.addColons({
      coln: 1
    })
  }

  return(
    <Feed feed={feed} hChangeView={handleChangeView} />
  )
}

FeedContainer.propTypes = {
  feed: PropTypes.object,
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
export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)

