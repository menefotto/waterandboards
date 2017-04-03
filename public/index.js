import React from 'react';
import ReactDOM from 'react-dom';
import CustomAppBar from './components/CustomAppBar.js';
import CustomGridList from './components/CustomGridList.js';
import LoginWidget from './components/LoginWidget.js';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlueGrey from './themes.js'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


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
