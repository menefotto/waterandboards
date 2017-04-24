import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import BlueGrey from './themes'
import rootReducer from './reducers'
import initialState from './state.js'
import { 
  asyncComponent, 
  saveState, 
  loadState 
}from './utils'
require('preact/devtools');


//if(loadState() === undefined){
// saveState(initialState)
//}
//const localState = loadState()

const reduxStore = createStore(
  rootReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) 

//reduxStore.subscribe(() => {
//  saveState(reduxStore.getState())
//  console.log("State saved!")
//})


const Body = asyncComponent(() =>
  System.import('./components/Body').then(module => module.default)
)

const Feed = asyncComponent(() =>
  System.import('./containers/Feed').then(module => module.default)
)

const SignUp = asyncComponent(() =>
  System.import('./containers/SignUp').then(module => module.default)
)

const Profile = asyncComponent(() =>
  System.import('./components/Profile').then(module => module.default)
)

const NotFound = asyncComponent(() =>
  System.import('./components/NotFound').then(module => module.default)
)


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Body>
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/logged" component={Feed} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Body>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
)


ReactDOM.render(<App/>, document.getElementById('content'))
