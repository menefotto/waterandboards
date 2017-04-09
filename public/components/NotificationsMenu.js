import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Menu, MenuItem} from 'material-ui/Menu';
import Popover from 'material-ui/Popover/Popover';
import ActionDone from 'material-ui/svg-icons/action/done';
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
        >
          <Menu>
            {
              NotificationsReducer.list.map((elem, idx) =>
                <NoticationItem key={idx} idx={idx} text={elem.text} />
              )
            }
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
    status = NotificationsReducer.list[this.props.idx].status

    let defaultStatus
    if (status === "done") {
      defaultStatus = <ActionDone />
    }else if (status === "loading"){
      defaultStatus = <RefreshIndicator status={status}/>
    }else{
      defaultStatus = <span />
    }

    return (
      <div>
        <MenuItem primaryText={this.props.text} />
        {defaultStatus}
      </div>
    )
  }
})


export default NotificationsMenu;
