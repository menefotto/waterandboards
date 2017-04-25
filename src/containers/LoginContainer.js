import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from "../components/Login.js"
import * as Actions from '../actions'


const LoginContainer = ({ actions, register }) => {
  const handleRegister = (e) => {
    actions.registerState({
      register: true
    })
  }

  return(
    <Login 
      register={register}
      hLogin={handleRegister}
      hRegister={handleRegister}
    />
  )
}


const mapStateToProps = (state, props) => {
  return {
    register : state.LoginPageRdx.register,
  }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

/**
 * Connect the component to
 * the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

