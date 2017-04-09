import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { 
  Toolbar, 
  ToolbarGroup, 
  ToobarSeparator, 
  ToolbarTitle 
} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import SearchBar from "./SearchBar";
import Logged from "./Logged";


const ToolBar = React.createClass({
  propTypes : {
    logo: PropTypes.string,
    bTitle: PropTypes.string,
    element: PropTypes.element,
    hOpen: PropTypes.func.isRequired,
    hLogin: PropTypes.func.isRequired,
    hSearch: PropTypes.func.isRequired,
    hMenu: PropTypes.func.isRequired,
    hRequestClose: PropTypes.func.isRequired,
    hSeeAllNotifications: PropTypes.func.isRequired,
  },

  contextTypes: {
      store: PropTypes.object
  },

  getDefaultProps: function() {
    return {
      logo: "images/logo.png",
      bTitle: "WaterAndBoards",
    }
  },

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  },

  componentWillUnmount() {
    this.unsubscribe(); 
  },

  render(){
    const { store } = this.context;
    const { getState } = store;
    const { AppBarReducer, LoginPageReducer } = getState();

    let rightElement
    if (AppBarReducer.simplebar){
      rightElement = <span />
    } else {
      rightElement = this.props.element == null ?
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
        <ToolbarGroup firstChild={true}>
          <Avatar src={this.props.logo} style={barStyle.left} />
          <ToolbarTitle text={this.props.bTitle} style={barStyle.title}/>
        </ToolbarGroup>
        <ToolbarGroup style={barStyle.center}>
          {
            AppBarReducer.simplebar ?
            <span />:
            <SearchBar onClick={this.props.hSearch} />
          }
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          {rightElement}
        </ToolbarGroup>
      </Toolbar>
    )
  }
})


const SignUp = ({ onClick }) => (
  <RaisedButton 
    default={true} 
    style={barStyle.rightLogin}
    onClick={onClick}
  >
      Sign Up
  </RaisedButton>
)


const barStyle = {
  bar: {
    height: 70,
  },
  rightLogin: {
    marginRight: 96,
  },
  right: {
    marginBottom: 20,
    marginRight: 96,
  },
  center: {
    marginBottom: 20,
    marginRight: 200, 
    marginLeft: 0,
  },
  left: {
    marginBottom: 3,
    marginLeft: 96,
  },
  title: {
    marginLeft: 4,
    marginRight: 2,
    fontSize: 28,
    fontFamily: "'Architects Daughter', cursive",
  }
}


export default ToolBar;
