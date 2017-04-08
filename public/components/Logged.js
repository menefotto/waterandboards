import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Badge from 'material-ui/Badge';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import SocialPerson from 'material-ui/svg-icons/social/person';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

  
const Logged = React.createClass({
  propTypes : {
    onClick: PropTypes.func.isRequired,
    avatar: PropTypes.string,
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
    const { AppBarReducer, LoginPageReducer } = getState();

    let defaultAvatar
    if (this.props.avatar === "" ){
      defaultAvatar = <Avatar icon={<SocialPerson />} />
    }else{
      defaultAvatar = <Avatar src={this.props.avatar}  />
    }

    return(
      <div>
        <Badge
          badgeContent={AppBarReducer.notifications}
          badgeStyle={{top: 6, right: 6}}
          secondary={true}
        >
          <NotificationsIcon style={{marginBottom: 5}} />
        </Badge>
        <IconButton
          onTouchTap={this.props.onClick}
          style={barStyle.right} 
        >
          <Avatar src={this.props.avatar} style={{alignSelf: "center"}} />
        </IconButton>
      </div>
    )
  }
})


const barStyle = {
  right: {
    marginBottom: 20,
    marginRight: 96,
  },
}


export default Logged;
