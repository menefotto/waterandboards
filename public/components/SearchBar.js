import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'
import ActionSearch from 'material-ui/svg-icons/action/search'


class SearchBar extends React.Component {
  render(){
    return(
      <div style={searchStyle.paper}>
        <Paper zDepth={2} >
            <AutoComplete 
                name="autocomp" 
                autoFocus={true}
                fullWidth={true}
                dataSource={source} 
                style={searchStyle.input}
                hintText="Search for windsurf gear"
                onNewRequest={this.props.handleSearch}
            />
            <SearchButton 
              style={{marginRight: "5%"}} 
              onClick={this.props.handleSearch} 
            />
        </Paper>
      </div>
    )
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
}

 
const SearchButton = ( onClick ) => (
    <RaisedButton
        secondary={true}
        icon={<ActionSearch />}
    >
    </RaisedButton>
)

const source = ["board","sails","misc"]
const searchStyle = {
    paper: {
        align: "center",
        height: 30,
        width: 500,
        marginTop : 0,
        marginBottom: 0,
        backgroundColor: "#FFFFFF",
    },
    input: {
        width : 350,
        marginLeft: "5%",
        marginRight: "5%",
    }
}


export default SearchBar
