import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  GridList, 
  GridTile,
} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";

const Profile = React.createClass({
  propTypes : {
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
    const { AppBarReducer, LoginPageReducer, NotificationsReducer } = getState();

    return(
      <div style={formStyles.root}>
        <GridList cellHeight='auto' cols={1} style={formStyles.gridList} >
          <GridTile>
            <Paper zDepth={2}>
              <Divider />
                <label style={formStyles.label}> Email </label>
                <TextField 
                  style={formStyles.text} 
                  id="email" 
                  underlineShow={false} 
                />
              <Divider />
                <label style={formStyles.label}> Username </label>
                <TextField 
                  style={formStyles.text} 
                  id="username" 
                  underlineShow={false} 
                />
              <Divider />
                <label style={formStyles.label}> First Name </label>
                <TextField 
                  style={formStyles.text} 
                  id="firstname" 
                  underlineShow={false} 
                />
              <Divider />
                <label style={formStyles.label}> Last Name </label>
                <TextField 
                  style={formStyles.text} 
                  id="lastname" 
                  underlineShow={false} 
                />
              <Divider />
                <label style={formStyles.label}> Password </label>
                <TextField 
                  style={formStyles.text} 
                  id="password" 
                  underlineShow={false} 
                />
              <Divider />
                <label style={formStyles.label}> Profile Photo </label>
                <TextField 
                  style={formStyles.text} 
                  id="profile-photo" 
                  underlineShow={false} 
                />
              <Divider />
                <RaisedButton secondary={true} style={formStyles.button}> 
                  Delete Account 
                </RaisedButton>
              <Divider />
            </Paper>
          </GridTile>
        </GridList> 
      </div>
    )
  }
})


const formStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: 120,
    width: 480,
    height: "auto",
    overflowY: 'auto',
  },
  button: {
    width: "100%",
  },
  label: {
    marginLeft: 15,
  },
  text: {
    width: "75%",
  },
}


export default Profile;
