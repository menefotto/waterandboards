import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class NotFound extends React.Component{
  render(){
    return(
      <div style={styles}>
        <h1> Ops wiped out ¯\_(ツ)_/¯ </h1>
        <div>
        </div>
      </div>
    )
  }
}

// centering a div :)
const styles = {
  boxShadow: '3px 3px 5px #888888',
  borderRadius: 20,
  backgroundColor: "#FFF",
  textAlign: "center",
  position: 'absolute',
  margin: 'auto',
  bottom: 0,
  right: 0,
  top: 0,
  left: 0,
  height: 400,
  width: 400,
}
export default NotFound
