import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import BlueGrey from './themes'
import rootReducer from './reducers'
import initialState from './state.js'
import Body from './components/Body.js'
import Grid from './components/Grid.js'
import SignUp from './containers/SignUp.js'
import Profile from './components/Profile.js'
import YouTube from './containers/YouTube.js'


const reduxStore = createStore(
  rootReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) 


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
    <Provider store={reduxStore}>
      <Router>
        <Body>
          <Route path="/" component={Grid} />
          <Route path="/logged" component={Grid} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
        </Body>
      </Router>
    </Provider>
  </MuiThemeProvider>
)


ReactDOM.render(<App/>, document.getElementById('content'))
