import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import AppBar from '../containers/AppBar.js'


class Body extends React.Component{
  render(){
    return(
      <div>
        <AppBar />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default Body
