import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import YouTube from "../components/YouTube"
import * as Actions from '../actions'


class YouTubeContainer extends React.Component{

  hPlayVideo = (e) => {
    e.preventDefault()

    this.props.actions.playVideo({
      play: true,
      index: this.props.idx
    })
  }

  render(){
    const play = this.props.feed.list[this.props.idx].play

    return(
      <YouTube 
        play={play}
        idx={this.props.idx} 
        size={this.props.size} 
        videoId={this.props.videoId} 
        hPlayVideo={this.hPlayVideo} 
      />
    )
  }
}

YouTubeContainer.propTypes = {
  size: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  videoId: PropTypes.string.isRequired,
}

YouTubeContainer.defaultProps = {
  size: {},
}
 

const mapStateToProps = (state, props) => {
  return {
    feed: state.FeedRdx
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
export default connect(mapStateToProps, mapDispatchToProps)(YouTubeContainer)
