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
  propTypes : {
    element: PropTypes.element,
    logo: PropTypes.string,
    sTitle: PropTypes.string,
    hClose: PropTypes.func.isRequired,
    hOpen: PropTypes.func.isRequired,
    hLogin: PropTypes.func.isRequired,
    hSearch: PropTypes.func.isRequired,
    hUploads: PropTypes.func.isRequired,
    hMessages: PropTypes.func.isRequired,
    hItems: PropTypes.func.isRequired,
    hProfile: PropTypes.func.isRequired,
    hLogout: PropTypes.func.isRequired,
    hMenu: PropTypes.func.isRequired,
    hRequestClose: PropTypes.func.isRequired,
    hSeeAllNotifications: PropTypes.func.isRequired,
  }

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


TopBar.defaultProps = {
  element: <span />
}


//  app bar end ----------------------------------------------------
//

export default TopBar
