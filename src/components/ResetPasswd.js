import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class ResetPasswd extends React.Component{

  render(){
    return(
      <div style={formStyles.root}>
        <form>
          <TextField 
              name="email" 
              style={formStyles.textFirst} 
              hintText="Email..." 
              type="email"
          />
          <Divider />
          <RaisedButton 
            label={<strong> Reset Password </strong>}
            onTouchTap={this.props.hReset}
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

ResetPasswd.propTypes = {
  hReset: PropTypes.func,
}

const formStyles = {
  root: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 200,
    width: 480,
    height: 180,
    margin: 'auto',
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: "#FFF",
  },
  textFirst: {
    marginTop: 20,
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


export default ResetPasswd
