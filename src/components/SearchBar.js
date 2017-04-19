import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'
import ActionSearch from 'material-ui/svg-icons/action/search'


class SearchBar extends React.Component {
  render(){
    return(
      <div style={searchStyle.paper}>
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
          style={searchStyle.button} 
          onClick={this.props.handleSearch} 
        />
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
    height: 50,
    width: "100%",
    marginTop : 20,
    marginBottom: 0,
    backgroundColor: "#FFFFFF",
  },
  input: {
    width : "60%",
    marginLeft: "7.5%",
    marginRight: "2%",
  },
  button: {
    width: "auto",
    marginRight: "7.5",
  },
}


export default SearchBar
