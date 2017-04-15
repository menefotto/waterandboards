import React from 'react'
import ReactDOM from 'react-dom'


const YouTubeEmbed = ({ videoId, w="640", h="360" }) => {
  const id = "https://www.youtube.com/embed/" + videoId + "?controls=0"
  return(
    <div style={{marginLeft: "2.5%"}}>
      <iframe 
        width={w} 
        height={h}
        frameBorder="0"
        src={id}
      >
      </iframe>
    </div>
  )
}


export default YouTubeEmbed
