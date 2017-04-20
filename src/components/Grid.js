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


const sizes = {
  small: {w:320, h:180, n:"default"},
  medium: {w:480,h:360, n:"hqdefault"},
  normal: {w:640,h:480, n:"sddefault"},
}


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
        gStyle = {...gridStyles.size, width: 700}
        break
      default:
        gStyle = {...gridStyles.size, width: 700}
    }

    const cards = []
    // work around till I fix the reducer to always return an array
    for(let idx = 0; idx < Object.keys(GridRdx.list).length; idx++){
      cards.push (
        <GridTile key={idx}>
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
    marginTop: 20,
    width: 720,
    height: 1000,
    overflowY: 'auto',
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
