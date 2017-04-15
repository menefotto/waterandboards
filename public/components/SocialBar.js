import React from 'react'
import ReactDOM from 'react-dom'
import Checkbox from 'material-ui/Checkbox'
import FontAwesome from '../deps/react-fontawesome'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


// login page
const SocialBar = () => (
  <div style={iconStyle.bar}>
    <Checkbox
      style={iconStyle.like}
      uncheckedIcon={<ActionFavoriteBorder />}
      checkedIcon={<ActionFavorite style={{color: '#FF0000'}} />}
    />
    <button style={iconStyle.social}>
      <FontAwesome 
        name="twitter-square" 
        size="2x" 
        title="share it on twitter"
        style={iconStyle.ico} 
      />
    </button>
    <button style={iconStyle.social}>
      <FontAwesome 
        name="facebook-official" 
        size="2x" 
        title="share it on facebook"
        style={iconStyle.ico} 
      />
    </button>
  </div>
)


// social bar style and layout
const iconStyle = {
  bar: {
    height: 60,
  },
  social: {
    backgroundColor: "transparent",
    transform: `translateY(1px)`,
    marginBottom : 4,
    marginRight: 8, 
    marginLeft: 8, 
    marginTop: 0,
    border: 'none',
    width: 32,
  },
  like : {
    marginBottom : 4,
    marginLeft: 16,
    marginRight: 10 ,
    marginTop: 0,
    width: 60,
  },
  ico : {
    paddingRight: 2,
    paddingLeft: 0,
  },
}

export default SocialBar
