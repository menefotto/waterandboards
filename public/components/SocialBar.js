import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';


// login page
const SocialBar = () => (
  <div>
      <button style={iconStyle.like}>
        <FontAwesome 
          name="heart" 
          size="2x" 
          style={iconStyle.ico} 
        />
      </button>
      <button style={iconStyle.social}>
        <FontAwesome 
          name="youtube-play" 
          size="2x" 
          title="share it on youtube"
          style={iconStyle.ico} 
        />
      </button>
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
// end social bar --------------------------------------

// social bar style and layout
const iconStyle = {
  social: {
      transform: `translateY(1px)`,
      backgroundColor: "transparent",
      border: 'none',
      width: 32,
      marginRight: 8, 
      marginLeft: 8, 
      marginTop: 0,
      marginBottom : 4,
  },
  like : {
      transform: `translateY(1px)`,
      backgroundColor: "transparent",
      border: 'none',
      width: 40,
      marginRight: 446,
      marginLeft: 16,
      marginTop: 0,
      marginBottom : 4,
  },
  ico : {
      paddingRight: 2,
      paddingLeft: 0,
  },
}

export default SocialBar;
