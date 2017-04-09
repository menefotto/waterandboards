import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Badge from 'material-ui/Badge';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import SocialPerson from 'material-ui/svg-icons/social/person';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import NotificationsMenu from "./NotificationsMenu.js";


const Logged = React.createClass({
  propTypes : {
    avatar: PropTypes.string,
    hMenu: PropTypes.func.isRequired,
    hSettings: PropTypes.func.isRequired,
    hRequestClose: PropTypes.func.isRequired,
    hSeeAllNotifications: PropTypes.func.isRequired,
  },

  contextTypes: {
      store: PropTypes.object
  },

  getDefaultProps: function() {
    return {
      avatar: "",
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
    const { AppBarReducer, LoginPageReducer, NotificationsReducer } = getState();

    let defaultAvatar
    if (this.props.avatar.length === 0){
      defaultAvatar = <Avatar icon={<SocialPerson />} />
    }else{
      defaultAvatar = <Avatar src={this.props.avatar} />
    }

    let second, first
    if (NotificationsReducer === 0){
      second = false, first = true
    }else{
      second = true, first = false
    }

    return(
      <div style={barStyle.right}>
        <IconButton 
          onTouchTap={this.props.hMenu}
          style={barStyle.icon}
        >
          <Badge
            badgeContent={NotificationsReducer.total}
            badgeStyle={{top: 10, right: 1}}
            secondary={second}
            primary={first}
          >
            <NotificationsIcon />
            <NotificationsMenu 
              style={{marginBottom: 35}}
              hRequestClose={this.props.hRequestClose}
              hSeeAllNotifications={this.props.hSeeAllNotifications}
            />
          </Badge>
        </IconButton>
        <IconButton 
          onTouchTap={this.props.hSettings}
          style={{marginBottom: 20}}
        >
          {defaultAvatar}
        </IconButton>
      </div>
    )
  }
})


const barStyle = {
  right: {
    marginRight: 96,
    marginBottom: 12,
  },
  icon: {
    marginRight: 30,
    marginBottom: 0,
  },
}


export default Logged;
