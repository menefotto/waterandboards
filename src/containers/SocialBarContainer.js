import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SocialBar from '../components/SocialBar'
import * as Actions from '../actions'


const SocialBarContainer = ({ actions, index, feed }) => {
  const handleChecked = (e, checked) => {
    if(checked){
      actions.incLikes({
        idx: index,
      })
    }else{
      actions.decLikes({
        idx: index,
      })
    }
  }

  return(
    <SocialBar 
      idx={index} 
      likes={feed.list[index].likes} 
      liked={feed.list[index].liked} 
      hChecked={handleChecked}
    />
  )
}

SocialBarContainer.propTypes = {
  feed: PropTypes.object.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(SocialBarContainer)
