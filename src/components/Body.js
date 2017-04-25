import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TopBarContainer from '../containers/TopBarContainer'


class Body extends React.Component{
  render(){
    return(
      <div>
        <TopBarContainer />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default Body
