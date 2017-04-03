import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {
   CustomAppBar,
   CustomGridList,
   LoginWidget,
} from './components.js'
import BlueGrey from './themes.js'

class App extends React.Component {
  state = {
    loginpage: false,
  }

  constructor(props) {
        super(props)
        this.state = {loginpage: false}
  } 

  handleLogin = () => this.setState({loginpage: true})

  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
        <div> 
          <CustomAppBar />
          {
            this.state.loginpage ?
              <LoginWidget /> :
              <CustomGridList />
          }
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('content'))
