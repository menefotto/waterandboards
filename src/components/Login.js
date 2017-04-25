import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {
  GridList, 
} from 'material-ui/GridList'
import checkCookie from '../utils'
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css'


class Login extends React.Component{

  render(){
    return(
      <div style={formStyles.root}>
        <GridList cellHeight='auto' cols={1} style={formStyles.gridList} >
          <div style={formStyles.paper}>
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
                  label={
                    this.props.register? "Register" : "Login"
                  }
              >
              </RaisedButton>
              <Divider />
              <RaisedButton 
                children={
                  <FontAwesome 
                    name="google" 
                    size="lg" 
                    title="share it on google"
                  />
                }
                backgroundColor={"#DD4B39"} 
                style={formStyles.buttonGoogle}
                label={
                  this.props.register? 
                    "Register with Google" : 
                    "Login with Google"
                }
              >
              </RaisedButton>
              <RaisedButton 
                children={
                  <FontAwesome 
                    name="facebook" 
                    size="lg" 
                    title="share it on facebook"
                  />
                }
                backgroundColor={"#3B5998"} 
                style={formStyles.buttonFacebook}
                label={
                  this.props.register? 
                    "Register with Facebook" : 
                    "Login with Facebook"
                }
              >
              </RaisedButton>
            </form>
          </div>
          <div style={formStyles.gridTile}>
            { !this.props.register ? 
                <RegisterLink hRegister={this.props.hRegister} />:
                <LoginLink hLogin={this.props.hLogin} />
            }
          </div>
        </GridList> 
      </div>
      )
    }    
}

Login.propTypes = {
  register: PropTypes.bool,
  hRegister: PropTypes.func.isRequired,
  hLogin: PropTypes.func.isRequired,
}

Login.defaultProps = {
  register: false,
}


const RegisterLink = ({ hRegister  }) => {
  return(
    <div style={formStyles.inputClick}> 
      Don't have an account? <a onClick={hRegister} href="#"> Register </a> 
    </div> 
  )
}

const LoginLink = ({ hLogin  }) => {
  return(
    <div style={formStyles.inputClick}> 
      Have an account? <a onClick={hLogin} href="#"> Login </a> 
    </div>
  )
}

const formStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  input: {
    marginLeft: 107,
  },
  inputClick: {
    textAlign: "center",
    paddingTop: 10,
  },
  paper: {
    borderRadius: 5,
    backgroundColor: "#FFF"
  },
  gridTile: {
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  gridList: {
    marginTop: 120,
    width: 480,
    height: "auto",
    overflowY: 'auto',
  },
  textFirst: {
    marginTop: 20,
    marginLeft: 107,
  },
  button: {
    width: "70%",
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 70,
  },
  buttonGoogle: {
    width: "70%",
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 70,
  },
  buttonFacebook: {
    width: "70%",
    marginTop: 0,
    marginBottom: 30,
    marginLeft: 70,
  },
}


export default Login
