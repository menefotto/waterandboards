import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import SocialPerson from 'material-ui/svg-icons/social/person'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload'
import Notifications from "./Notifications.js"


class Logged extends React.Component{
  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount() {
    this.unsubscribe() 
  }

  render(){ 
    const { store } = this.context
    const { getState } = store
    const { AppBarRdx, LoginPageRdx, NotificationRdx } = getState()

    let defaultAvatar
    if (this.props.avatar.length === 0){
      defaultAvatar = <Avatar icon={<SocialPerson />} />
    }else{
      defaultAvatar = <Avatar src={this.props.avatar} />
    }

    let second, first
    if (NotificationRdx === 0){
      second = false, first = true
    }else{
      second = true, first = false
    }

    return(
      <div style={barStyle.right}>
        <IconButton tooltip={"upload new item"}>
          <FileCloudUpload />
        </IconButton>
        <IconButton 
          onTouchTap={this.props.hMenu}
          style={barStyle.icon}
        >
          <Badge
            badgeContent={NotificationRdx.total}
            badgeStyle={{top: 10, right: 1}}
            secondary={second}
            primary={first}
          >
            <NotificationsIcon />
            <Notifications 
              style={{marginBottom: 55, maxHeight: 500}}
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
}


Logged.defaultProps = {
  avatar: "",
}

Logged.propTypes = {
  avatar: PropTypes.string,
  hMenu: PropTypes.func.isRequired,
  hSettings: PropTypes.func.isRequired,
  hRequestClose: PropTypes.func.isRequired,
  hSeeAllNotifications: PropTypes.func.isRequired,
}

const barStyle = {
  right: {
    width: 160,
    marginBottom: 12,
  },
  icon: {
    marginRight: "8%",
  },
}


export default Logged
