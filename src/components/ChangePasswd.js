import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class ChangePasswd extends React.Component{

  render(){
    return(
      <div style={formStyles.root}>
        <form>
          <TextField 
            name="passwd1" 
            style={formStyles.textFirst1} 
            hintText="Password..." 
            type="password"
          />
          <TextField 
            name="passwd2" 
            style={formStyles.textFirst2} 
            hintText="Retype Password..." 
            type="password"
          />
          <Divider />
          <RaisedButton 
            label={<strong> Change Password </strong>}
            onTouchTap={this.props.hChange}
            labelColor={"#FFF"}
            backgroundColor={"#C0C0C0"} 
            style={formStyles.button}
          >
          </RaisedButton>
        </form>
      </div>
    )
  }
}

ChangePasswd.propTypes = {
  hChange: PropTypes.func,
}

const formStyles = {
  root: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 200,
    width: 480,
    height: 240,
    margin: 'auto',
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: "#FFF",
  },
  textFirst1: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 107,
  },
  textFirst2: {
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 107,
  },
  button: {
    width: "70%",
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 70,
  },
}


export default ChangePasswd
