import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {
   CustomAppBar,
   CustomGridList,
   LoginRegisterPage,
} from './components.js'
import BlueGrey from './themes.js'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
    <div> 
      <CustomAppBar />
      <LoginRegisterPage />
    </div>
  </MuiThemeProvider>
)

ReactDOM.render(<App/>, document.getElementById('content'))
