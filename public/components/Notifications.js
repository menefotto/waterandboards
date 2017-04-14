import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import RaisedButton from "material-ui/RaisedButton";
import ActionDone from 'material-ui/svg-icons/action/done';
import CircularProgress from 'material-ui/CircularProgress';


class Notifications extends React.Component{
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
          style={{marginTop: 45, width: "20%"}}
          className="notificationArea"
        >
          <div style={{padding: 5}}>
            {
              NotificationRdx.list.map((elem, idx) =>
                <NoticationItem key={idx} idx={idx} text={elem.text} />
              )
            }
            <RaisedButton default={true} style={{width: "100%", marginTop: 5}}>
              <em> All Notifications </em>
            </RaisedButton>
          </div>
        </Popover>
      </div>
    )
  }
}

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
          <ItemStatus
            done={NotificationRdx.list[this.props.idx].checked}
            text={this.props.text}
          />:
          <ItemStatus
            done={NotificationRdx.list[this.props.idx].checked}
            text={this.props.text}
          />
        }
        <Divider />
      </div>
    )
  }
}


const ItemStatus = ({text, done}) => {
  return(
    <div style={{marginBottom: 10, marginTop: 10}}>
      {
        done ? 
        <CircularProgress 
          style={ItemStatusStyle.progress}
          thickness={5} 
          size={25}
        /> : 
        <ActionDone 
          style={ItemStatusStyle.progress}
        />
      }
      <label 
        style={ItemStatusStyle.text}
      > 
        {text} 
      </label>
    </div>
  )
}


const ItemStatusStyle = {
  progress:  {
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
  }
}


export default Notifications;
