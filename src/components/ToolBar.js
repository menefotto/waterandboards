import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { 
  Toolbar, 
  ToolbarGroup, 
  ToobarSeparator, 
  ToolbarTitle 
} from 'material-ui/Toolbar'
import Avatar from 'material-ui/Avatar'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import SignUp from "./SignUp"
import Logged from "./Logged"
import SearchBar from "./SearchBar"


class ToolBar extends React.Component{
  static contextTypes = {
    store: PropTypes.object.isRequired
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
    const { AppBarRdx, LoginPageRdx } = getState()

    let rightElement, searchElement
    if (AppBarRdx.simplebar){
      rightElement = <span />
    } else {
      rightElement = AppBarRdx.logged ?
        <Logged 
          hMenu={this.props.hMenu}
          hSettings={this.props.hOpen}
          hRequestClose={this.props.hRequestClose}
          hSeeAllNotifications={this.props.hSeeAllNotifications}
        />:
        <SignUp onClick={this.props.hLogin} />
    }

    return(
      <Toolbar style={barStyle.bar}>
        <ToolbarGroup style={barStyle.left} firstChild={true}>
          <Avatar src={this.props.logo} />
          <ToolbarTitle text={this.props.bTitle} style={barStyle.title} />
        </ToolbarGroup>
        <ToolbarGroup 
          style={
            AppBarRdx.logged ? 
              barStyle.centerLogged : barStyle.centerSignUp
          }
        >
          {
            AppBarRdx.simplebar ?
            <span />:
            <SearchBar onClick={this.props.hSearch} />
          }
        </ToolbarGroup>
        <ToolbarGroup 
          style={
            AppBarRdx.logged ? 
              barStyle.rightLogged : barStyle.right
          } 
          lastChild={true}
        >
          {rightElement}
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

ToolBar.propTypes = {
  logo: PropTypes.string,
  bTitle: PropTypes.string,
  element: PropTypes.element,
  hOpen: PropTypes.func.isRequired,
  hLogin: PropTypes.func.isRequired,
  hSearch: PropTypes.func.isRequired,
  hMenu: PropTypes.func.isRequired,
  hRequestClose: PropTypes.func.isRequired,
  hSeeAllNotifications: PropTypes.func.isRequired,
}

ToolBar.defaultProps = {
  logo: "images/logo.png",
  bTitle: "WaterAndBoards",
}

const barStyle = {
  bar: {
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
    marginRight: "0%",
  },
  centerLogged: {
    marginBottom: 20,
    marginRight: "18%", 
  },
  centerSignUp: {
    marginBottom: 20,
    marginRight: "19%", 
  },
  title: {
    fontSize: 28,
    marginLeft: 4,
    marginRight: 2,
    fontFamily: "'Architects Daughter', cursive",
  }
}


export default ToolBar
