import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  GridList, 
  GridTile,
} from 'material-ui/GridList';
import checkCookie from '../utils';


class Login extends React.Component{
  propTypes : {
    register: PropTypes.bool,
    hRegister: PropTypes.func.isRequired,
    hLogin: PropTypes.func.isRequired,
  }

  contextTypes : {
      store: PropTypes.object
  }
 
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount() {
    this.unsubscribe(); 
  }

  render(){
    const { store } = this.context;
    const { getState } = store;
    const { AppBarReducer, LoginPageReducer } = getState();

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
                    LoginPageReducer.register ?
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
                    label={
                      LoginPageReducer.register? "Register" : "Login"
                    }
                >
                </RaisedButton>
                <Divider />
                <RaisedButton 
                  children={
                    <FontAwesome 
                      name="facebook" 
                      size="lg" 
                      title="share it on facebook"
                      style={iconStyle.f} 
                    />
                  }
                  backgroundColor={"#3B5998"} 
                  style={formStyles.buttonFacebook}
                  label={
                    LoginPageReducer.register? 
                      "Register with Facebook" : 
                      "Login with Facebook"
                  }
                >
                </RaisedButton>
                <RaisedButton 
                  children={
                    <FontAwesome 
                      name="google" 
                      size="lg" 
                      title="share it on google"
                      style={iconStyle.g} 
                    />
                  }
                  backgroundColor={"#DB4437"} 
                  style={formStyles.buttonGoogle}
                  label={
                    LoginPageReducer.register? 
                      "Register with Google" : 
                      "Login with Google"
                  }
                >
                </RaisedButton>
              </form>
            </Paper>
            </GridTile>
            <GridTile>
                <Paper zDepth={3} style={formStyles.gridTile}>
                    { !LoginPageReducer.register ? 
                        <div 
                            style={formStyles.inputClick}> 
                            Don't have an account? <a onClick={this.props.hRegister} href="#"> Register </a> 
                        </div> : 
                        <div 
                            style={formStyles.inputClick}> 
                            Have an account? <a onClick={this.props.hLogin} href="#"> Login </a> 
                        </div>
                    }
                </Paper>
            </GridTile>
          </GridList> 
        </div>
      )
    }    
}

Login.defaultProps = {
    //    registered = checkCookie("registered")
  register: false,
}


const iconStyle = {
  f: {
    //marginRight: "30%",
  },
  g: {
    // marginRight: "5%",
  },
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
    marginLeft: 107,
  },
  input: {
    marginLeft: 107,
  },
  inputClick: {
    textAlign: "center",
    paddingTop: 10,
  },
  button: {
    width: "70%",
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 70,
  },
  buttonFacebook: {
    width: "70%",
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 70,
  },
  buttonGoogle: {
    width: "70%",
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 70,
  },
}


export default Login;
