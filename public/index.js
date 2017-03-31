import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import {
   CustomAppBar,
   CustomGridList,
} from './components.js'

const App = () => (
  <MuiThemeProvider>
    <div> 
      <CustomAppBar />
      <CustomGridList />
    </div>
  </MuiThemeProvider>
)

ReactDOM.render(<App/>, document.getElementById('content'))
