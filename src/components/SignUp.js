import React from 'react'
import ReactDOM from 'react-dom'
import ButtonLink from './ButtonLink.js'
import RaisedButton from 'material-ui/RaisedButton'


const SignUp = ({ onClick }) => (
  <div>
    <RaisedButton 
      default={true} 
      onClick={onClick}
    >
      <ButtonLink to="/signup" text="Sign Up" />
    </RaisedButton>
  </div>
)


export default SignUp
