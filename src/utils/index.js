import React from 'react'


// little helper function to check cookie existence
export const checkCookie = ({ cookieName }) => {

  cookies = document.cookie.split("")
  for ( let idx in cookies ) {
    if (cookies[idx].search(cookieName) !== -1){
      return true
    }
  }

  return false
}


// load route components asynchronously 
export function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}


// load and save state helper functions
export const loadState = () => {
  try{
    const serializedState = localStorage.getItem('state')
    if (serializedState === null){
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err){
      console.log("Err can't get state: ", err)
      return undefined
  }
}

export const saveState = (state) => {
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(err){
    console.log("Err cant' save state: ", err)
  }
}
