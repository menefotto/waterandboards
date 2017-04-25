import React from 'react'
import ReactDOM from 'react-dom'
import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import NotificationMenu from "./NotificationMenu"


const Notifications = ({
  first, 
  second, 
  hOpen, 
  hClose, 
  hShowAll, 
  total}) => {
  return(
    <Badge
      primary={first}
      secondary={second}
      badgeContent={total}
      badgeStyle={{top: 25, right: 15}}
    >
      <IconButton 
        disableTouchRipple={true}
        onTouchTap={hOpen}
      >
        <NotificationsIcon />
      </IconButton>
      <NotificationMenu
        hRequestClose={hClose}
        hSeeAllNotifications={hShowAll}
      />
    </Badge>
  )
}


export default Notifications
