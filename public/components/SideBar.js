import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import SocialPerson from 'material-ui/svg-icons/social/person';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';


class SideBar extends React.Component{
  propTypes : {
    sTitle: PropTypes.string,
    hClose: PropTypes.func.isRequired,
    hUploads: PropTypes.func.isRequired,
    hMessages: PropTypes.func.isRequired,
    hItems: PropTypes.func.isRequired,
    hProfile: PropTypes.func.isRequired,
    hLogout: PropTypes.func.isRequired,
  }
 
  static contextTypes = {
      store: PropTypes.object
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount() {
    this.unsubscribe(); 
  }


  render(){
    const { store } = this.context;
    const { getState } = store;
    const { AppBarReducer, LoginReducer } = getState();
 
    return(
      <div>
        <Drawer openSecondary={true} open={AppBarReducer.opened} >
          <AppBar
            title={this.props.sTitle}
            style={{ height: 70 }}
            iconElementLeft={<Close onClick={this.props.hClose} />}
          />
          <MenuItem 
            primaryText="Uploads" 
            leftIcon={<FileCloudUpload />} 
            onTouchTap={this.props.hUploads}
          />
          <MenuItem 
            primaryText="Messages" 
            leftIcon={<CommunicationMessage />} 
            onTouchTap={this.props.hMessages}
          />
          <MenuItem 
            primaryText="Posted Items" 
            leftIcon={<EditorAttachMoney />} 
            onTouchTap={this.props.hItems}
          />
          <MenuItem 
            primaryText="Profile" 
            leftIcon={<ActionAccountCircle />} 
            onTouchTap={this.props.hProfile}
          />
          <Divider />
          <MenuItem 
            primaryText="LogOut" 
            leftIcon={<ActionPowerSettingsNew />} 
            onTouchTap={this.props.hLogout}
          />
        </Drawer>
      </div>
    )
  }
}

SideBar.defaultProps = {
  sTitle: "Settings",
}


const PostedItems = () => {
  return(
    <SvgIcon>
      <path d="M-147.669,188.292c0,0,14.609-25.926,20.526-36.49c3.476-6.218,11.271-12.372,22.062-22.771  c15.036-14.49,33.225-42.396,33.225-42.396l16.566-18.165c7.312-7.649,20.472-23.701,20.472-23.701  c4.239-4.906,4.847-9.005,2.504-11.55c-2.771-3.01-7.19-3.587-13.117,1.888L-65.569,53.84l-18.512,16.489  c0,0,8.377-14.346-1.818-20.051c-10.919-6.113-19.507,8.095-19.507,8.095s9.648-15.535-1.424-21.913  c-12.566-7.232-20.913,9.412-20.913,9.412s9.104-15.699-3.697-22.437c-11.328-5.959-19.599,9.396-19.599,9.396  c-8.452,15.096-16.211,28.244-16.211,28.244c-21.941-21.083-28.762-25.046-33.825-27.663c-11.608-6.008-19.157-1.264-21.607,3.106  c-5.021,8.978,9.469,10.952,12.152,17.327c0,0,21.967,20.822,30.827,40.348c6.536,14.403,9.632,21.724,4.425,31.032l-19.85,36.503  L-147.669,188.292z"></path>
    </SvgIcon>
  )
}

const Close = ({ onClick }) => {
  return(
    <IconButton 
      onTouchTap={onClick}
    > 
      <NavigationClose /> 
    </IconButton>
  )
}


export default SideBar;
