import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import YouTubeEmbed from "../components/YouTubeEmbed.js"
import * as Actions from '../actions'


const YouTube = ({ actions, idx, videoId }) => {
  const handlePlayVideo = (e) => {
    actions.playVideo({
      play: true,
      index: idx
    })
  }

  return(
    <YouTubeEmbed 
      idx={idx}
      videoId={videoId}
      hPlayVideo={handlePlayVideo}
    />
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
export default connect(mapStateToProps, mapDispatchToProps)(YouTube)

