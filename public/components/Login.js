import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  GridList, 
  GridTile,
} from 'material-ui/GridList';


class Login extends React.Component {
   propTypes: {
      register: PropTypes.bool,
   }

   defaultProps: {
      register: false,
   }

   render(){
     return(
        <div style={formStyles.root}>
          <GridList cellHeight='auto' cols={1} style={formStyles.gridList} >
            <GridTile>
            <Paper zDepth={3}>
                <form>
                <TextField 
                    name="email" 
                    style={formStyles.textFirst} 
                    hintText="Email..." 
                    type="email"
                />
                {
                    this.props.register ?
                    <div>
                        <TextField 
                            name="fname" 
                            style={formStyles.input} 
                            hintText="First name..." 
                        />
                        <TextField 
                            name="lname" 
                            style={formStyles.input} 
                            hintText="Last name..." 
                        /> 
                        <TextField 
                            name="password1" 
                            style={formStyles.input} 
                            hintText="Password..." 
                            type="password"
                        /> 
                    </div> : null
                }
                <TextField 
                    name="password2" 
                    style={formStyles.input} 
                    hintText="Password..." 
                    type="password"
                /> 
                <RaisedButton 
                    backgroundColor={"#C0C0C0"} 
                    style={formStyles.button}
                >
                    {this.props.register? "Register" : "Login"}
                </RaisedButton>
                <Divider />
                <RaisedButton 
                    backgroundColor={"#3B5998"} 
                    style={formStyles.buttonFacebook}
                >
                    {this.props.register? "Register with Facebook" : "Login with Facebook"}
                </RaisedButton>
                <RaisedButton 
                    backgroundColor={"#DB4437"} 
                    style={formStyles.buttonGoogle}
                >
                    {this.props.register? "Register with Google" : "Login with Google"}
                </RaisedButton>
                </form>
            </Paper>
            </GridTile>
            <GridTile>
                <Paper zDepth={3} style={formStyles.gridTile}>
                    { !this.props.register ? 
                        <div 
                            style={formStyles.inputClick}> 
                            Don't have an account? <a onClick={this.handleRegister} href="#"> Register </a> 
                        </div> : 
                        <div 
                            style={formStyles.inputClick}> 
                            Have an account? <a onClick={this.handleRegister} href="#"> Login </a> 
                        </div>
                    }
                </Paper>
            </GridTile>
          </GridList> 
        </div>
        )
    }    
}

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
  gridTile: {
    marginTop: 30,
    height: 40,
  },
  textFirst: {
    marginTop: 20,
    marginLeft: 120,
  },
  input: {
    marginLeft: 120,
  },
  inputClick: {
    textAlign: "center",
    paddingTop: 10,
  },
  button: {
    width: "70%",
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 80,
  },
  buttonFacebook: {
    width: "70%",
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 80,
  },
  buttonGoogle: {
    width: "70%",
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 80,
  },
}


export default Login;
