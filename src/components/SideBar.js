import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import SvgIcon from 'material-ui/SvgIcon'
import IconButton from 'material-ui/IconButton'
import SocialPerson from 'material-ui/svg-icons/social/person'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload'
import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money'
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle'
import CommunicationMessage from 'material-ui/svg-icons/communication/message'
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new'
import Logout from '../containers/Logout.js'
import ButtonLink from './ButtonLink.js'


class SideBar extends React.Component{
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
    const { AppBarRdx, LoginReducer } = getState()
 
    return(
      <div style={styles.sidebar}>
        <Drawer openSecondary={true} open={AppBarRdx.opened} >
          <AppBar
            title={this.props.sTitle}
            style={{ height: 60 }}
            iconElementLeft={<Close onClick={this.props.hClose} />}
          />
          <MenuItem 
            primaryText={<ButtonLink to="uploads" text="Uploads" />}
            leftIcon={<FileCloudUpload />} 
            onTouchTap={this.props.hUploads}
          />
          <MenuItem 
            primaryText={<ButtonLink to="messages" text="Messages" />}
            leftIcon={<CommunicationMessage />} 
            onTouchTap={this.props.hMessages}
          />
          <MenuItem 
            primaryText={<ButtonLink to="posted-items" text="Posted Items" />}
            leftIcon={<EditorAttachMoney />} 
            onTouchTap={this.props.hItems}
          />
          <MenuItem 
            primaryText={<ButtonLink to="/profile" text="Profile" />}
            leftIcon={<ActionAccountCircle />} 
            onTouchTap={this.props.hProfile}
          />
          <Divider />
          <MenuItem 
            primaryText="Logout" 
            leftIcon={<ActionPowerSettingsNew />} 
            onTouchTap={this.props.hLogout}
            children={this.props.oLogout}
          />
        </Drawer>
      </div>
    )
  }
}

SideBar.propTypes = {
  sTitle: PropTypes.string,
  hClose: PropTypes.func.isRequired,
  hUploads: PropTypes.func.isRequired,
  hMessages: PropTypes.func.isRequired,
  hItems: PropTypes.func.isRequired,
  hProfile: PropTypes.func.isRequired,
  hLogout: PropTypes.func.isRequired,
  oLogout: PropTypes.object.isRequired,
}
 
SideBar.defaultProps = {
  sTitle: "Settings",
}


const Close = ({ onClick }) => {
  return(
    <IconButton 
      disableTouchRipple={true}
      onTouchTap={onClick}
    > 
      <NavigationClose /> 
    </IconButton>
  )
}

const styles = {
  sidebar: {
    top: 0,
  }
}


export default SideBar
