import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'


class Message extends React.Component{
 static contextTypes = {
    store: PropTypes.object,
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
    const { SideBarRdx } = getState()

    const actions = [
      <FlatButton
        label={this.props.lButtonLabel}
        primary={true}
        onTouchTap={this.props.hCancel}
      />,
      <FlatButton
        label={this.props.rButtonLabel}
        secondary={true}
        onTouchTap={this.props.hOk}
        keyboardFocused={true}
      />,
    ]

    return(
      <div>
        <Dialog
          modal={true}
          actions={actions}
          title={this.props.title}
          open={SideBarRdx.logoutShow}
        >
          {this.props.optionalText}
        </Dialog>
      </div>
    )
  }
}

Message.propTypes = {
  hOk: PropTypes.func.isRequired,
  optionalText: PropTypes.string,
  title: PropTypes.string.isRequired,
  hCancel: PropTypes.func.isRequired,
  rButtonLabel: PropTypes.string.isRequired,
  lButtonLabel: PropTypes.string.isRequired,
}

 
export default Message
