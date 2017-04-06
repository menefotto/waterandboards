import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import * as Actions from "../actions";


const AppBarCustom = React.createClass({
  propTypes : {
    element: PropTypes.element,
    logo: PropTypes.string.isRequired,
    opened: PropTypes.bool,
    hClose: PropTypes.func.isRequired,
    hOpen: PropTypes.func.isRequired,
    hLogin: PropTypes.func.isRequired,
  },

  contextTypes: {
      store: PropTypes.object
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
    const { AppBarReducer, LoginReducer } = getState();

    return(
      <div>
        <AppBar
          title={<span> WaterAndBoards </span>}
          titleStyle={barStyle.title}
          iconElementRight={this.props.element == null ? <Login onClick={this.props.hLogin} /> : <Logged onClick={this.props.hOpen} />}
          iconElementLeft={<Avatar style={barStyle.left} src={this.props.logo} />} 
        />
        <Drawer openSecondary={true} open={AppBarReducer.opened} >
          <AppBar
            title={<span> Settings </span>}
            iconElementLeft={<Close onClick={this.props.hClose} />}
          />
        </Drawer>
      </div>
    )
  }
})


//  app bar end ----------------------------------------------------
//
const Close = ({ onClick }) => {
  return(
    <IconButton 
      onTouchTap={onClick}
    > 
      <NavigationClose /> 
    </IconButton>
  )
}

const Logged = ({ onClick }) => {
  return(
    <IconButton
      onTouchTap={onClick}
      style={barStyle.rightLogged} 
    >
      <Avatar src="images/avatar.jpg" style={{alignSelf: "center", marginBottom: 10}} />
    </IconButton>
  )
}

const Login = ({ onClick }) => (
  <RaisedButton 
    default={true} 
    style={barStyle.rightLogin}
    onClick={onClick}
  >
      Login
  </RaisedButton>
)

// app bar style and layout
const barStyle = {
  rightLogin: {
    marginTop: 4,
    marginRight: 96,
  },
  rightLogged: {
    marginTop: 4,
    marginRight: 96,
  },
  left: {
    marginTop: 4,
    marginLeft: 96,
  },
  title: {
      fontFamily: "'Architects Daughter', cursive"
  }
}


export default AppBarCustom;
