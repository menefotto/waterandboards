import React from 'react'
import ReactDOM from 'react-dom'


const sizes = {
  small: {w:"320", h:"180", n:"default"},
  medium: {w:"480",h:"360", n:"hqdefault"},
  normal: {w:"640",h:"480", n:"sddefault"},
}

const urls = {
  video = "https://www.youtube.com/embed/"
  image = "https://i1.ytimg.com/vi/"
}


class YouTubeEmbed extends React.Component{

  let dimensions
  switch(size){
    case "small":
      dimensions = size.small
      break
    case "medium":
      dimensions = size.medium
      break
    case "default":
      dimensions = sizes.normal
      break
    default:
      dimensions = sizes.normal
  }

  const vid = urls.video + videoId + "?controls=0&autoplay=1"
  const iid = urls.image + videoId +  dimensions.n + ".jpg"

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
    const { store } = this.context
    const { getState } = store
    const { GridRdx } = getState()

    return(
      <div style={{marginLeft: "2.5%"}}>
        {
          GridRdx.list[this.props.idx].play ?
          <iframe 
            src={vid}
            frameBorder="0"
            width={dimensions.w} 
            height={dimensions.h}
          />:
          <img 
            src={iid} 
            onClick={hPlayVideo}
            width={dimensions.w} 
            height={dimensions.h} 
          />
        }
      </div>
    )
  }
}

YouTubeEmbed.propTypes = {
  size: PropTypes.string,
  idx: PropTypes.number.isRequired,
  hPlayVideo: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
}

YouTubeEmbed.defaultProps = {
  size: "default",
}


export default YouTubeEmbed
