import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import ActionSearch from 'material-ui/svg-icons/action/search';

class SearchBar extends React.Component {
   propTypes: {
      handleSearch: PropTypes.func.isRequired,
   }

   render(){
      return(
        <div style={searchStyle.paper}>
          <Paper zDepth={2} >
              <AutoComplete 
                  name="autocomp" 
                  fullWidth={true}
                  style={searchStyle.input}
                  dataSource={source} 
                  hintText="Search for windsurf gear"
                  autoFocus={true}
                  onNewRequest={this.props.handleSearch}
              />
              <SearchButton style={{marginRight: "5%" }} onClick={this.props.handleSearch} />
          </Paper>
        </div>
     )
}
// end search style and data source ------------------------------


const SearchButton = ( handleSearch ) => (
    <RaisedButton
        onClick={handleSearch}
        secondary={true}
        icon={<ActionSearch />}
    >
    </RaisedButton>
)


// search style and data source
const source = ["board","sails","misc"]
const searchStyle = {
    paper: {
        align: "center",
        width: 680,
        height: 50,
        marginTop : 20,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
    },
    input: {
        width : "75%",
        marginLeft: "5%",
        marginRight: "2%",
    }
}

export default SearchBar;
