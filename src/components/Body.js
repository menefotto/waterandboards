import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import AppBar from '../containers/AppBar.js'


class Body extends React.Component{
  render(){
    return(
      <div>
        <AppBar />
        {this.props.children}
      </div>
    )
  }
}


export default Body
