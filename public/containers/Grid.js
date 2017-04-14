import React from 'react';
import ReactDOM from 'react-dom';
import {
  GridList, 
  GridTile
} from 'material-ui/GridList';

// Actual grid
class Grid extends React.Component {

   render(){
      return(
        <div style={gridStyles.root}>
          <GridList 
            cellHeight='auto' 
            cols={1} 
            style={gridStyles.gridList}
          >
           {/* for loops here possibly fetching as well */}
         </GridList> 
      </div>
      )
   }
}

const Item = ({ Card }) => (
  <GridTile>
    Card
  </GridTile>
) 

// Grid style and layout 
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

export default Grid;
