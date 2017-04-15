import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppBar from 'material-ui/AppBar'

import ToolBar from "./ToolBar"
import SideBar from './SideBar'
import Logout from '../containers/Logout.js'
import * as Actions from "../actions"


class TopBar extends React.Component{
  render(){
    return(
      <div>
        <ToolBar
          element={this.props.element}
          hOpen={this.props.hOpen}
          hLogin={this.props.hLogin}
          hSearch={this.props.hSearch}
          hMenu={this.props.hMenu}
          hRequestClose={this.props.hRequestClose}
          hSeeAllNotifications={this.props.hSeeAllNotifications}
        />
        <SideBar
          hUploads={this.props.hUploads}
          hMessages={this.props.hMessages}
          hProfile={this.props.hProfile}
          hItems={this.props.hItems}
          hLogout={this.props.hLogout}
          oLogout={<Logout />}
          hClose={this.props.hClose}
        />
      </div>
    )
  }
}

TopBar.propTypes = {
  logo: PropTypes.string,
  sTitle: PropTypes.string,
  element: PropTypes.element,
  hMenu: PropTypes.func.isRequired,
  hOpen: PropTypes.func.isRequired,
  hItems: PropTypes.func.isRequired,
  hClose: PropTypes.func.isRequired,
  hLogin: PropTypes.func.isRequired,
  hLogout: PropTypes.func.isRequired,
  hSearch: PropTypes.func.isRequired,
  hProfile: PropTypes.func.isRequired,
  hUploads: PropTypes.func.isRequired,
  hMessages: PropTypes.func.isRequired,
  hRequestClose: PropTypes.func.isRequired,
  hSeeAllNotifications: PropTypes.func.isRequired,
}

TopBar.defaultProps = {
  element: <span />
}


export default TopBar
