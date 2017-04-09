import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Menu, MenuItem} from 'material-ui/Menu';
import Popover from 'material-ui/Popover/Popover';
import ActionDone from 'material-ui/svg-icons/action/done';
import RefreshIndicator from 'material-ui/RefreshIndicator';


const NotificationsMenu = React.createClass({
  propTypes : {
    hRequestClose: PropTypes.func.isRequired,
    hSeeAllActivity: PropTypes.func.isRequired,
    anchorEl: PropTypes.element.isRequired, //used to the popover position
  },

  contextTypes: {
      store: PropTypes.object
  },

  getDefaultProps: function() {
    return {
    }
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
    const { AppBarReducer, LoginPageReducer } = getState();
    const nofications = AppBarReducer.notifications

    return(
      <div >
        <Popover
          open={AppBarReducer.notifications}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          onRequestClose={this.props.hRequestClose}
        >
          <Menu>
            {
              nofications.map((elem, idx) =>
                <NoticationItem idx={idx} text={elem.text} />
              )
            }
          </Menu>
        </Popover>
      </div>
    )
  }
})


{/* 
  Notification status looks like the following:
  notification[{status:"done",text:"hello"}]
*/}

const NoticationItem = React.createClass({
  propTypes: {
    idx: PropTypes.interger.isRequired,
    text: PropTypes.interger.isRequired,
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
    const { AppBarReducer, LoginPageReducer } = getState();

    // notification status can be either none, done, loading
    status = AppBarReducer.notifications[this.props.idx].status

    let defaultStatus
    if (status === "done") {
      defaultStatus = <ActionDone />
    }else if (status === "ongoing"){
      defaultStatus = <RefreshIndicator status="loading"/>
    }else{
      defaultStatus = <span />
    }

    return (
      <div>
        <MenuItem primaryText={this.props.text} />
        {defaultStatus}
      </div>
    )
})


export default NotificationsMenu;
