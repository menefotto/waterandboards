import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  GridList, 
  GridTile
} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
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
        break
      case 2:
        gStyle = {...gridStyles.size, width: 1080}
        break
      case 1:
        gStyle = {...gridStyles.size, width: 720}
        break
      default:
        gStyle = {...gridStyles.size, width: 720}
    }

    // Object keys is work-around till I fix the reducer to always return an array
    const cards = []
    for(let idx = 0; idx < Object.keys(GridRdx.list).length; idx++){
      cards.push (
        <GridTile key={idx} style={gridStyles.tile}>
          <PostedItem
            index={idx}
            size={GridRdx.size}
            videoId={GridRdx.list[idx].videoId}
            itemChips={GridRdx.list[idx].itemChips}
            cardHeader={GridRdx.list[idx].cardHeader}
          />
        </GridTile>
      )
    }

    return(
      <div style={gridStyles.root}>
        <IconButton 
          tooltip="change view" 
          style={gridStyles.views}
          onTouchTap={this.props.hChangeView}
        >
          <ActionViewModule />
        </IconButton>
        <GridList 
          cellHeight='auto' 
          cols={GridRdx.cols} 
          style={gStyle}
        >
          {cards}   
      </GridList> 
    </div>
    )
  }
}

Grid.propTypes = {
  hChangeView: PropTypes.func.isRequired,
}

const gridStyles = {
  size : {
    marginTop: 10,
    width: 720,
    height: 1300,
    overflowY: 'auto',
  },
  tile: {
    margin: 5,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  views: {
    marginLeft: "90%",
    marginBottom: "1%",
  },
}


export default Grid
