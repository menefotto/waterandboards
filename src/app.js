import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import BlueGrey from './themes'
import rootReducer from './reducers'
import initialState from './state.js'
import NotFound from './components/NotFound.js'
import Body from './components/Body.js'
import Feed from './containers/Feed.js'
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
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/logged" component={Feed} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Body>
      </Router>
    </Provider>
  </MuiThemeProvider>
)


ReactDOM.render(<App/>, document.getElementById('content'))
