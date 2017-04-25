import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SocialBar from '../components/SocialBar'
import * as Actions from '../actions'


const SocialBarContainer = ({ actions, index, feed }) => {

  const handleChecked = (e, checked) => {
    if(checked){
      actions.incLikes({
        idx: index,
      })
    }else{
      actions.decLikes({
        idx: index,
      })
    }
  }


  const _openLinkPage = (social) => {
    const url = feed.list[index].url
    const title = feed.list[index].cardHeader.title
    const options = 'menubar=no,scrollbars=yes,height=600,width=600'

    switch(social){
      case 'twitter':
        var link = "http://twitter.com/home?status=[TITLE]+[URL]"
        link = link.replace('[TITLE]', title)
        link = link.replace('[URL]', url)
        window.open(link,'', options)

      case 'facebook':
        var link = "http://www.facebook.com/share.php?u=[URL]&title=[TITLE]"
        link = link.replace('[TITLE]', title)
        link = link.replace('[URL]', url)
        window.open(link,'', options)
    }
  }
  

  const handleTwitter = (e) => {
    _openLinkPage('twitter')
  }

  const handleFacebook = (e) => {
    _openLinkPage('facebook')
  }
  
  return(
    <SocialBar 
      idx={index} 
      hTwitter={handleTwitter}
      hChecked={handleChecked}
      hFacebook={handleFacebook}
      likes={feed.list[index].likes} 
      liked={feed.list[index].liked} 
    />
  )
}

SocialBarContainer.propTypes = {
  feed: PropTypes.object.isRequired,
}

const mapStateToProps = (state, props) => {
  return {
    feed: state.FeedRdx,
  }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

/**
 * Connect the component to
 * the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(SocialBarContainer)
