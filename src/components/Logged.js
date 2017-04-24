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

    let avatar
    if (this.props.avatar.length === 0){
      avatar = <Avatar onTouchTap={this.props.hSettings} icon={<SocialPerson/>}/>
    }else{
      avatar = <Avatar onTouchTap={this.props.hSettings} src={this.props.avatar}/>
    }

    let second, first
    if (NotificationRdx === 0){
      second = false, first = true
    }else{
      second = true, first = false
    }

    return(
      <div style={barStyle.right}>
        <Notification
          first={first}
          second={second}
          Rdx={NotificationRdx}
          hMenu={this.props.hMenu}
          hClose={this.props.hRequestClose}
          hNotifications={this.props.hSeeAllNotifications}
        />
        {avatar}
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


const Notification = ({first, second, hMenu, hClose, hNotifications, Rdx}) => {
  return(
    <Badge
      primary={first}
      secondary={second}
      badgeContent={Rdx.total}
      badgeStyle={{top: 25, right: 15}}
    >
      <IconButton 
        disableTouchRipple={true}
        onTouchTap={hMenu}
      >
        <NotificationsIcon />
      </IconButton>
      <Notifications 
        hRequestClose={hClose}
        hSeeAllNotifications={hNotifications}
      />
    </Badge>
  )
}

const barStyle = {
  right: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}


export default Logged
