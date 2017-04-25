import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import FontAwesome from 'react-fontawesome'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import 'font-awesome/css/font-awesome.min.css'


class SocialBar extends React.Component{

  render(){
    return(
      <div style={styles.bar}>
        <Checkbox
          style={styles.like}
          checked={this.props.liked}
          onCheck={this.props.hChecked}
          label={this.props.likes + " likes"}
          labelStyle={{minWidth: 60, fontSize: 12}}
          uncheckedIcon={<ActionFavoriteBorder />}
          checkedIcon={<ActionFavorite style={{fill: 'red'}} />} 
        />
        {/* fill workaround since it doesn't change color otherwise */}
        <div style={styles.social}>
          <button style={styles.socialT}>
            <FontAwesome 
              name="twitter-square" 
              size="2x" 
              title="share it on twitter"
              style={styles.ico} 
            />
          </button>
          <button style={styles.socialF}>
            <FontAwesome 
              name="facebook-official" 
              size="2x" 
              title="share it on facebook"
              style={styles.ico} 
            />
          </button>
        </div>
      </div>
    )
  }
}

SocialBar.propTypes = {
  idx: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  hChecked: PropTypes.func.isRequired,
}

SocialBar.defaultProps = {
  liked: false, 
}

const styles = {
  ico: {
    paddingLeft: 0,
    paddingRight: 2,
  },
  bar: {
    height: 40,
    width: "auto",
    marginBottom: 10,
    display: 'flex',  // display and flexDirection are used to inline it
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  social: {
    marginRight: 40,
  },
  like: {
    width: 60,
    marginLeft: 30,
  },
  socialT: {
    width: 32,
    border: 'none',
    marginRight: 15, 
    transform: `translateY(1px)`,
    backgroundColor: "transparent",
  },
  socialF: {
    width: 32,
    border: 'none',
    marginRight: 30, 
    transform: `translateY(1px)`,
    backgroundColor: "transparent",
  },
}


export default SocialBar
