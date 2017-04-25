import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import InfiniteScroll from 'react-infinite-scroller'
import PostedItem from '../components/PostedItem.js';
import ActionViewModule from 'material-ui/svg-icons/action/view-module'


class Feed extends React.Component {

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
    const { FeedRdx } = getState()

    let dimensions, gStyle
    switch(FeedRdx.cols){
      case 3:
        gStyle = {...FeedStyles.size, width: 1140}
        break
      case 2:
        gStyle = {...FeedStyles.size, width: 1080}
        break
      case 1:
        gStyle = {...FeedStyles.size, width: 720}
        break
      default:
        gStyle = {...FeedStyles.size, width: 720}
    }

    // Object keys is work-around till I fix the reducer to always return an array
    const items = []
    for(let idx = 0; idx < Object.keys(FeedRdx.list).length; idx++){
      items.push (
        <div key={idx} style={FeedStyles.tile}>
          <PostedItem
            index={idx}
            size={FeedRdx.size}
            videoId={FeedRdx.list[idx].videoId}
            itemChips={FeedRdx.list[idx].itemChips}
            cardHeader={FeedRdx.list[idx].cardHeader}
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
    //position: 'absolute',
    height: 25,
    marginTop: 100,
    marginLeft: "90%",
    zIndex: 1,
  },
}


export default Feed
