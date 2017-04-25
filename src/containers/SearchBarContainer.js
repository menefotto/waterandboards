import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchBar from '../components/SearchBar'
import * as Actions from '../actions'


const SearchBarContainer = ({ actions }) => {
  const handleSearch = (term, idx) => {
    actions.search({
      term: term,
    })
  }

  const handleSearchClick = (e) => {
    let text = document.getElementById("autocomp").value
    actions.search({
      term: text,
    })
  }

  return(
    <SearchBar 
      hSearch={handleSearch} 
      hSearchClick={handleSearchClick}
    />
  )
}


const mapStateToProps = (state, props) => {
  return {
    state: state
  }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

/**
 * Connect the component to
 * the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)
