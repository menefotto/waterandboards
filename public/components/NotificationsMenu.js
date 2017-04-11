import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Menu, MenuItem} from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import RaisedButton from "material-ui/RaisedButton";
import LinearProgress from 'material-ui/LinearProgress';
import CircularProgress from 'material-ui/CircularProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';


const NotificationsMenu = React.createClass({
  propTypes : {
    hRequestClose: PropTypes.func.isRequired,
    hSeeAllNotifications: PropTypes.func.isRequired,
  },

  contextTypes: {
      store: PropTypes.object
  },

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  },

  componentWillUnmount() {
    this.unsubscribe(); 
  },

  render(){ 
    const { store } = this.context;
    const { getState } = store;
    const { AppBarReducer, LoginPageReducer, NotificationsReducer } = getState();

    return(
      <div >
        <Popover
          open={AppBarReducer.showMenu}
          anchorEl={AppBarReducer.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          onRequestClose={this.props.hRequestClose}
          style={{marginTop: 45, width: "20.5%" }}
        >
          <Menu style={{ width: "90%" }}>
            {
              NotificationsReducer.list.map((elem, idx) =>
                <NoticationItem key={idx} idx={idx} text={elem.text} />
              )
            }
            <RaisedButton default={true} style={{width: "100%", marginTop: 5}}>
              <em> All Notifications </em>
            </RaisedButton>
          </Menu>
        </Popover>
      </div>
    )
  }
})


// Notification status looks like the following: 
// notification[{status:"done",text:"hello"}]


const NoticationItem = React.createClass({
  propTypes: {
    idx: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    loadingStatus: PropTypes.element
  },

  contextTypes: {
      store: PropTypes.object
  },

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  },

  componentWillUnmount() {
    this.unsubscribe(); 
  },

  render(){ 
    const { store } = this.context;
    const { getState } = store;
    const { AppBarReducer, LoginPageReducer, NotificationsReducer } = getState();
    // notification status can be either none, done, loading
    const status = NotificationsReducer.list[this.props.idx].status

    return (
      <div>
        {
          status === "loading" ?
          <MenuItem 
            checked={NotificationsReducer.list[this.props.idx].checked}
            primaryText={this.props.text}
            style={{marginLeft: 60 }}
          />:
          <MenuItem 
            checked={NotificationsReducer.list[this.props.idx].checked}
            primaryText={this.props.text}
            style={{marginLeft: 5, marginBottom: 5 }}
          />
        }
        {
          status === "loading" ? <ProgressStatus /> : null
        }
        <Divider />
      </div>
    )
  }
})


const ProgressStatus = () => {
  return(
    <LinearProgress
      style={{marginLeft: 15, width: "93%", marginBottom: 5, marginRight: 15}}
    />
  )
}


export default NotificationsMenu;
