import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { 
  Toolbar, 
  ToolbarGroup, 
  ToobarSeparator, 
  ToolbarTitle 
} from 'material-ui/Toolbar'
import Avatar from 'material-ui/Avatar'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import SignUpContainer from "../containers/SignUpContainer"
import SearchBarContainer from "../containers/SearchBarContainer"
import LoggedContainer from "../containers/LoggedContainer"

import logoBase64 from "../images/logo"


class ToolBar extends React.PureComponent{

  render(){
    let rightElement, searchElement
    let logged = this.props.appBar.logged

    if (this.props.appBar.simplebar){
      rightElement = <span />
    } else {
      rightElement = logged ? <LoggedContainer /> : <SignUpContainer />
    }

    return(
      <div style={barStyle.bar}>
        <Toolbar>
          <ToolbarGroup style={barStyle.left} firstChild={true}>
            <Avatar src={this.props.logo} onTouchTap={this.props.hLogo}/>
            <ToolbarTitle text={this.props.bTitle} style={barStyle.title} />
          </ToolbarGroup>
          <ToolbarGroup 
            style={logged ? barStyle.centerLogged : barStyle.centerSignUp}
          >
            {
              !this.props.appBar.searchbar ? <span /> : <SearchBarContainer />
            }
          </ToolbarGroup>
          <ToolbarGroup 
            style={logged ? barStyle.rightLogged : barStyle.right} 
            lastChild={true}
          >
            {rightElement}
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

ToolBar.propTypes = {
  logo: PropTypes.string,
  bTitle: PropTypes.string,
  hLogo: PropTypes.func.isRequired,
  appBar : PropTypes.object.isRequired,
}

ToolBar.defaultProps = {
  logo: logoBase64,
  bTitle: "WaterAndBoards",
}

const barStyle = {
  bar: {
    position: 'fixed',
    overflow: 'hidden',
    zIndex: 1,
    height: 70,
    width: "100%",
  },
  left: {
    marginLeft: "2%",
  },
  right: {
    marginRight: "2%",
  },
  rightLogged: {
    marginRight: "2%",
  },
  centerLogged: {
    position: 'absolute',
    top: -7,
    right: 0,
    left: 0,
    width: 400,
    height: 50,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  centerSignUp: {
    position: 'absolute',
    top: -7,
    right: 0,
    left: 0,
    width: 400,
    height: 50,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 28,
    marginLeft: 4,
    marginRight: 2,
    fontFamily: "'Architects Daughter', cursive",
  }
}


export default ToolBar
