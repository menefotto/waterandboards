import React from 'react'
import ReactDOM from 'react-dom'
import Checkbox from 'material-ui/Checkbox'
import FontAwesome from '../deps/react-fontawesome'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


const SocialBar = () => (
  <div style={iconStyle.bar}>
    <Checkbox
      style={iconStyle.like}
      uncheckedIcon={<ActionFavoriteBorder />}
      checkedIcon={<ActionFavorite style={{color: '#FF0000'}} />}
    />
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

const iconStyle = {
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
    marginLeft: 460, 
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
  ico : {
    paddingLeft: 0,
    paddingRight: 2,
  },
}


export default SocialBar
