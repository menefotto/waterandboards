import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  GridList, 
  GridTile
} from 'material-ui/GridList'
import CardCustom from '../components/Card.js';


// Actual grid
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
    // workaroud apparently even though I am feeding to it an array
    // the store gives me back something else likely an object #ugly
    const list = Array.prototype.slice.call(GridRdx.list)
    return(
      <div style={gridStyles.root}>
        <GridList 
          cellHeight='auto' 
          cols={1} 
          style={gridStyles.gridList}
        >
          {
            list.map((elem, idx) =>
              <GridTile key={idx}>
                <CardCustom
                  index={idx}
                  videoId={elem.videoId}
                  itemChips={elem.itemChips}
                  cardHeader={elem.cardHeader}
                />
              </GridTile>
            ) 
          }
       </GridList> 
    </div>
    )
  }
}


const Item = ({ Card }) => (
  <GridTile>
    {Card}
  </GridTile>
) 

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
}

export default Grid