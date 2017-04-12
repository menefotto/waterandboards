import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Menu, MenuItem} from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import RaisedButton from "material-ui/RaisedButton";
import LinearProgress from 'material-ui/LinearProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';


class NotificationsMenu extends React.Component{
  propTypes : {
    hRequestClose: PropTypes.func.isRequired,
    hSeeAllNotifications: PropTypes.func.isRequired,
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
    const { AppBarRdx, LoginPageRdx, NotificationRdx } = getState();

    return(
      <div >
        <Popover
          open={AppBarRdx.showMenu}
          anchorEl={AppBarRdx.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          onRequestClose={this.props.hRequestClose}
          style={{marginTop: 45, width: "20.5%" }}
        >
          <Menu className={styles.menu}>
            {
              NotificationRdx.list.map((elem, idx) =>
                <NoticationItem key={idx} idx={idx} text={elem.text} />
              )
            }
            <RaisedButton default={true} style={{width: "100%", marginTop: 5}}>
              <em> All Notifications </em>
            </RaisedButton>
          </Menu>
        </Popover>
      </div>
    )
  }
}


const styles = cssInJS({
  menu: {
    width: "90%",
    ":before": {
      content: ' ',
      position: "absolute",
      width: 0,
      height: 0,
      left: 30,
      top: 100,
      border: "25 solid",
      borderColor: "#666",
    },
    ":after": {
      content: ' ',
      position: "absolute",
      width: 0,
      height: 0,
      left: 38,
      top: 100,
      border: "15 solid",
      borderColor: "#fff",
    }
  }
})

// Notification status looks like the following: 
// notification[{status:"done",text:"hello"}]


class NoticationItem extends React.Component{
  propTypes: {
    idx: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    loadingStatus: PropTypes.element
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
    const { AppBarRdx, LoginPageRdx, NotificationRdx } = getState();
    // notification status can be either none, done, loading
    const status = NotificationRdx.list[this.props.idx].status

    return (
      <div>
        {
          status === "loading" ?
          <MenuItem 
            checked={NotificationRdx.list[this.props.idx].checked}
            primaryText={this.props.text}
            style={{marginLeft: 60 }}
          />:
          <MenuItem 
            checked={NotificationRdx.list[this.props.idx].checked}
            primaryText={this.props.text}
            style={{marginLeft: 5, marginBottom: 5 }}
          />
        }
        {
          status === "loading" ? <ProgressStatus /> : null
        }
        <Divider />
      </div>
    )
  }
}


const ProgressStatus = () => {
  return(
    <LinearProgress
      style={{marginLeft: 15, width: "93%", marginBottom: 5, marginRight: 15}}
    />
  )
}


export default NotificationsMenu;
