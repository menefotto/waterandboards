import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  GridList, 
  GridTile
} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import CardCustom from '../components/Card.js';
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

    const cards = []
    // work around till I fix the reducer to always return an array
    for(let idx = 0; idx < Object.keys(GridRdx.list).length; idx++){
      cards.push (
        <GridTile key={idx}>
          <CardCustom
            index={idx}
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
        >
          <ActionViewModule />
        </IconButton>
        <GridList 
          cellHeight='auto' 
          cols={1} 
          style={gridStyles.gridList}
        >
          {cards}   
       </GridList> 
    </div>
    )
  }
}

const gridStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: 20,
    width: 720,
    height: 1000,
    overflowY: 'auto',
  },
  views: {
    position: "absolute",
    marginTop: "3%",
    marginLeft: "30%",
  },
}


export default Grid
