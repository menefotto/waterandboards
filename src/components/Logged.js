import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Avatar from 'material-ui/Avatar'
import SocialPerson from 'material-ui/svg-icons/social/person'
import NotificationContainer from '../containers/NotificationContainer.js'


class Logged extends React.Component{

  render(){ 

    let avatar
    let hSettings = this.props.hSettings

    if (this.props.avatar.length === 0){
      avatar = <Avatar onTouchTap={hSettings} icon={<SocialPerson/>}/>
    }else{
      avatar = <Avatar onTouchTap={hSettings} src={this.props.avatar}/>
    }

    return(
      <div style={barStyle.right}>
        <NotificationContainer />
        {avatar}
      </div>
    )
  }
}

Logged.propTypes = {
  avatar: PropTypes.string,
  hSettings: PropTypes.func.isRequired,
}

Logged.defaultProps = {
  avatar: "",
}


const barStyle = {
  right: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}


export default Logged
