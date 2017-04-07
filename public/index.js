import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppBar from './containers/AppBar.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlueGrey from './themes.js'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import rootReducer from './reducers';

const initialState = {
  AppBarReducer: { opened: false }
}

const reduxStore = createStore(
  rootReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) 


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
    <Provider store={reduxStore}>
      <div> 
        <AppBar />
      </div>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(<App/>, document.getElementById('content'))
