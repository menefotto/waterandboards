import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppBar from './components/AppBar.js';
import Grid from './components/Grid.js';
import Login from './components/Login.js';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlueGrey from './themes.js'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const reducer = () => (
  console.log("hello!")
)

const store = createStore(reducer)


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
        <Provider store={store}>
          <div> 
            <AppBar />
            {
              this.state.loginpage ?
                <Login /> :
                <Grid />
            }
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('content'))
