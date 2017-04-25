import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


const urls = {
  image: "https://i1.ytimg.com/vi/",
  video: "https://www.youtube.com/embed/"
}


class YouTube extends React.Component{

  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount() {
    this.unsubscribe() 
  }

  render(){
    const video = this.props.videoId
    const vid = urls.video + video + "?autoplay=1"
    const iid = urls.image + video + "/" + this.props.size.n + ".jpg"

    const { store } = this.context
    const { getState } = store
    const { FeedRdx } = getState()

    return(
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {
          FeedRdx.list[this.props.idx].play ?
            <iframe 
              src={vid}
              frameBorder="0"
              width={this.props.size.w} 
              height={this.props.size.h}
            />:
            <img 
              src={iid} 
              width={this.props.size.w} 
              height={this.props.size.h} 
              onClick={this.props.hPlayVideo}
            />
        }
      </div>
    )
  }
}

YouTube.propTypes = {
  size: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  hPlayVideo: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
}

YouTube.defaultProps = {
  size: {},
}
    

export default YouTube
