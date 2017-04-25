import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'


class Message extends React.Component{

  render(){
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
          open={this.props.showMessage}
        >
          {this.props.optionalText}
        </Dialog>
      </div>
    )
  }
}

Message.propTypes = {
  optionalText: PropTypes.string,
  hOk: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  hCancel: PropTypes.func.isRequired,
  showMessage: PropTypes.bool.isRequired,
  rButtonLabel: PropTypes.string.isRequired,
  lButtonLabel: PropTypes.string.isRequired,
}

Message.defaultProps = {
  showMessage: false,
}

 
export default Message
