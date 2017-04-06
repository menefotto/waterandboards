import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  Toolbar, 
  ToolbarGroup, 
  ToobarSeparator, 
  ToolbarTitle 
} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import SearchBar from "./SearchBar";

function search(e) {
  console.log("suga");
}

const ToolBar = React.createClass({
  render(){
    return(
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <Avatar src="images/logo.png" style={barStyle.left} />
          <ToolbarTitle text="WaterAndBoards" style={barStyle.title}/>
        </ToolbarGroup>
        <ToolbarGroup style={barStyle.center}>
          <SearchBar onClick={search} />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <Avatar src="images/avatar.jpg" style={barStyle.right}/>
        </ToolbarGroup>
      </Toolbar>
    )
  }
})



const barStyle = {
  right: {
    marginBottom: 3,
    marginRight: 96,
  },
  center: {
    marginRight: 0, 
    marginLeft: 0,
  },
  left: {
    marginBottom: 3,
    marginLeft: 96,
  },
  title: {
    marginLeft: 4,
    marginRight: 2,
    fontFamily: "'Architects Daughter', cursive",
  }
}


export default ToolBar;
