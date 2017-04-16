import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import FontAwesome from '../deps/react-fontawesome'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


class SocialBar extends React.Component{
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
    const { GridRdx } = getState()

    return(
      <div style={iconStyle.bar}>
        <Checkbox
          style={iconStyle.like}
          iconStyle={{width: 23,height: 27}}
          labelStyle={{minWidth: 60, fontSize: 12}}
          uncheckedIcon={<ActionFavoriteBorder />}
          checkedIcon={<ActionFavorite style={{fill: 'red'}} />} 
          label={GridRdx.list[this.props.idx].likes + " likes"}
        />
        {/* fill workaround since it doesn't change color otherwise */}
        <button style={iconStyle.socialT}>
          <FontAwesome 
            name="twitter-square" 
            size="2x" 
            title="share it on twitter"
            style={iconStyle.ico} 
          />
        </button>
        <button style={iconStyle.socialF}>
          <FontAwesome 
            name="facebook-official" 
            size="2x" 
            title="share it on facebook"
            style={iconStyle.ico} 
          />
        </button>
      </div>
    )
  }
}

SocialBar.propTypes = {
  idx: PropTypes.number.isRequired,
}

const iconStyle = {
  ico : {
    paddingLeft: 0,
    paddingRight: 2,
  },
  bar: {
    height: 40,
    width: 660,
    marginBottom: 10,
    display: 'flex',  // display and flexDirection are used to inline it
    flexDirection: 'row',
  },
  socialT: {
    width: 32,
    border: 'none',
    marginTop: 0,
    marginRight: 8, 
    marginLeft: 440, 
    marginBottom : 0,
    transform: `translateY(1px)`,
    backgroundColor: "transparent",
  },
  socialF: {
    width: 32,
    border: 'none',
    marginTop: 0,
    marginLeft: 0, 
    marginRight: 8, 
    marginBottom : 0,
    transform: `translateY(1px)`,
    backgroundColor: "transparent",
  },

  like : {
    width: 60,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 10,
    marginBottom : 4,
  },
}


export default SocialBar
