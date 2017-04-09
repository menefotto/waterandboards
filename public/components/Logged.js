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
    if (this.props.avatar === "" ){
      defaultAvatar = <Avatar icon={<SocialPerson />} />
    }else{
      defaultAvatar = <Avatar src={this.props.avatar} />
    }

    return(
      <div >
        <Badge
          badgeContent={NotificationsReducer.total}
          badgeStyle={{top: 6, right: 6}}
          secondary={true}
        >
        </Badge>
        <IconButton
          onTouchTap={this.props.hSettings}
          style={barStyle.right} 
        >
          <NotificationElement onClick={this.props.hMenu} />
          <NotificationsMenu 
            hRequestClose={this.props.hRequestClose}
            hSeeAllNotifications={this.props.hSeeAllNotifications}
          />
          <Avatar src={this.props.avatar} style={{alignSelf: "center"}} />
        </IconButton>
      </div>
    )
  }
})


const NotificationElement = ({ hMenu }) => {
  return(
    <NotificationsIcon 
      style={{marginBottom: 5}} 
      onClick={hMenu}
    />
  )
}

const barStyle = {
  right: {
    marginBottom: 20,
    marginRight: 96,
  },
}


export default Logged;
