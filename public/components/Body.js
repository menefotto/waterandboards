import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Profile from './Profile.js'
import SignUp from '../containers/SignUp.js'
import AppBar from '../containers/AppBar.js'
import Grid from '../components/Grid.js'


class Body extends React.Component{
  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount() {
    this.unsubscribe() 
  }

  render(){
    const { store } = this.context
    const { getState } = store
    const { BodyRdx } = getState()

    return(
      <div> 
        <AppBar />
        {BodyRdx.element}
      </div>
    )
  }
}


export default Body
