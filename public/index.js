import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import {
   CustomAppBar,
   CustomGridList,
} from './components.js'
import BlueGrey from './themes.js'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
    <div> 
      <CustomAppBar />
      <CustomGridList />
    </div>
  </MuiThemeProvider>
)

ReactDOM.render(<App/>, document.getElementById('content'))
