import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SocialBar from '../components/SocialBar'
import * as Actions from '../actions'


const Social = ({ actions, index }) => {
  const handleChecked = (e, checked) => {
    if(checked){
      actions.incLikes({
        idx: index,
      })
    }else{
      actions.decLikes({
        idx: index,
      })
    }
  }

  return(
    <SocialBar
      idx={index}
      hChecked={handleChecked}
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
export default connect(mapStateToProps, mapDispatchToProps)(Social)
