import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import InfiniteScroll from 'react-infinite-scroller'
import PostedItem from '../components/PostedItem.js';
import ActionViewModule from 'material-ui/svg-icons/action/view-module'


class Grid extends React.Component {

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

    let dimensions, gStyle
    switch(GridRdx.cols){
      case 3:
        gStyle = {...gridStyles.size, width: 1140}
        gStyle = {...gridStyles.size, width: 1140}
        break
      case 2:
        gStyle = {...gridStyles.size, width: 1080}
        gStyle = {...gridStyles.size, width: 1080}
        break
      case 1:
        gStyle = {...gridStyles.size, width: 720}
        gStyle = {...gridStyles.size, width: 720}
        break
      default:
        gStyle = {...gridStyles.size, width: 720}
        gStyle = {...gridStyles.size, width: 720}
    }

    // Object keys is work-around till I fix the reducer to always return an array
    const items = []
    for(let idx = 0; idx < Object.keys(GridRdx.list).length; idx++){
      items.push (
        <div key={idx} style={gridStyles.tile}>
          <PostedItem
            index={idx}
            size={GridRdx.size}
            videoId={GridRdx.list[idx].videoId}
            itemChips={GridRdx.list[idx].itemChips}
            cardHeader={GridRdx.list[idx].cardHeader}
          />
        </div>
      )
    }

    return(
      <div>
        <IconButton 
          tooltip="change view" 
          style={gridStyles.views}
          onTouchTap={this.props.hChangeView}
        >
          <ActionViewModule />
        </IconButton>
        <div style={gridStyles.root}>
          <InfiniteScroll
            pageStart={0}
            loadMore={null}
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

Grid.propTypes = {
  hChangeView: PropTypes.func.isRequired,
}

const gridStyles = {
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


export default Grid
