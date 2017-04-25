import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ButtonLink from '../components/ButtonLink'
import RaisedButton from 'material-ui/RaisedButton'
import * as Actions from '../actions'

const SignUpContainer = ({ actions  }) => {
  return(
    <div>
      <RaisedButton 
        default={true} 
        onClick={() => {actions.toggleAppBarState({simplebar: true,})}}
      >
        <ButtonLink to="/signup" text="Sign Up" />
      </RaisedButton>
    </div>
  )
}


const mapStateToProps = (state, props) => {
  return {
    state: state
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
