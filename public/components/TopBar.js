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

import ToolBar from "./ToolBar";
import * as Actions from "../actions";


const TopBar = React.createClass({
  propTypes : {
    element: PropTypes.element,
    logo: PropTypes.string,
    sTitle: PropTypes.string,
    hClose: PropTypes.func.isRequired,
    hOpen: PropTypes.func.isRequired,
    hLogin: PropTypes.func.isRequired,
    hSearch: PropTypes.func.isRequired,
  },

  contextTypes: {
      store: PropTypes.object
  },

  defaultProps: {
    sTitle: "Settings",
    element: <span />,
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
        <ToolBar
          element={this.props.element}
          hOpen={this.props.hOpen}
          hLogin={this.props.hOpen}
          hSearch={this.props.hSearch}
        />
        <Drawer openSecondary={true} open={AppBarReducer.opened} >
          <AppBar
            title={this.props.sTitle}
            style={{ height: 70 }}
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


export default TopBar;
