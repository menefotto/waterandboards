import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'
import ActionSearch from 'material-ui/svg-icons/action/search'

const focus = () => {
  //  console.log("called")
}

class SearchBar extends React.Component {
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
                onFocus={focus}
            />
            <SearchButton 
              style={{marginRight: "5%" }} 
              onClick={this.props.handleSearch} 
            />
        </Paper>
      </div>
    )
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

 
const SearchButton = ( onClick ) => (
    <RaisedButton
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
