import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToolBar from "./ToolBar"
import SideBarContainer from '../containers/SideBarContainer'
import * as Actions from "../actions"


class TopBar extends React.Component{
  render(){
    return(
      <div>
        <ToolBar hLogo={this.props.hLogo} />
        <SideBarContainer />
      </div>
    )
  }
}

TopBar.propTypes = {
  hLogo: PropTypes.func.isRequired,
}


export default TopBar
