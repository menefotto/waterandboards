import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import BlueGrey from './themes'
import rootReducer from './reducers'
import Body from './components/Body.js'
import Grid from './containers/Grid.js'


// redux initial reducers state +need splitting
const initialState = {
  BodyRdx: {
    element: <Grid />,
  },
  AppBarRdx: { 
    opened: false, 
    simplebar: false, 
    showMenu: false,
    anchorEl: null,
  },
  LoginPageRdx: { 
    register: false 
  },
  NotificationRdx: {
    all: true,
    chat: true,
    email: true,
    gearwatch: true,
    total: 3,
    list: [
      {text:"test notification 1", status:"loading", checked: false},
      {text:"test notification 2", status:"done", checked: true},
      {text:"test notification 3", status:"done", checked: true},
    ],
  },
  GridRdx: {
    list: [
      { cardHeader: 
        { 
          title: "Simmer Quantum",
          profile: "wind85",
          avatar: "images/avatar.jpg",
          timeAdded: "4 hours ago",
        }, 
        videoId: "iXjb1wAfQPo",
        itemChips:
        {
          conditions: "good",
          size: "236x85",
          liters: "85lt",
          price: "1800$",
        }
      },
    ]
  },
  SideBarRdx: {
    logoutShow: false,
  },
}


const reduxStore = createStore(
  rootReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) 


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
    <Provider store={reduxStore}>
      <Body />
    </Provider>
  </MuiThemeProvider>
)


ReactDOM.render(<App/>, document.getElementById('content'))
