import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import InfiniteScroll from 'react-infinite-scroller'
import PostedItem from '../components/PostedItem.js';
import ActionViewModule from 'material-ui/svg-icons/action/view-module'


class Feed extends React.Component {
  
  render(){
    let dimensions, styles
    let feed = this.props.feed
    switch(feed.cols){
      case 3:
        styles = {...FeedStyles.size, width: 1140}
        break
      case 2:
        styles = {...FeedStyles.size, width: 1080}
        break
      case 1:
        styles = {...FeedStyles.size, width: 720}
        break
      default:
        styles = {...FeedStyles.size, width: 720}
    }

    const items = []
    for(let idx = 0; idx < feed.list.length; idx++){
      items.push (
        <div key={idx} style={FeedStyles.tile}>
          <PostedItem
            index={idx}
            size={feed.size}
            videoId={feed.list[idx].videoId}
            itemChips={feed.list[idx].itemChips}
            cardHeader={feed.list[idx].cardHeader}
          />
        </div>
      )
    }

    return(
      <div>
        <IconButton 
          tooltip="change view" 
          style={FeedStyles.views}
          onTouchTap={this.props.hChangeView}
        >
          <ActionViewModule />
        </IconButton>
        <div style={FeedStyles.root}>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => { return false }}
            hasMore={false}
            useWindow={true}
          >
            {items}   
          </InfiniteScroll> 
        </div>
      </div>
    )
  }
}

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
  hChangeView: PropTypes.func.isRequired,
}

const FeedStyles = {
  tile: {
    margin: 5,
    height: 'auto',
  },
  size : {
    marginTop: 20,
    width: 720,
    overflowY: 'auto',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  views: {
    height: 25,
    marginTop: 100,
    marginLeft: "90%",
    zIndex: 1,
  },
}


export default Feed
