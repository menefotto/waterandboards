import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import InfiniteScroll from 'react-infinite-scroller'
import { NotificationItem } from './Notifications'

class NotificationPage extends React.Component{
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
    const { AppBarRdx , NotificationRdx} = getState()
  
    const elements = []
    const items = NotificationRdx.list
    for (let idx = 0; idx < items.length ;idx++){
      items.push(<NotificationItem key={idx} idx={idx} text={items[idx].text}/>)
    }

    return(
      <div style={gridStyles.root}>
        <Subheader style={gridStyles.header}> All Notifications </Subheader>
        <Divider />
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {return false}}
          hasMore={false}
          useWindow={true}
        >
          {elements}   
        </InfiniteScroll> 
      </div>
    )
  }
}

const gridStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: "#FFFFFF",
    borderRadius: 5,

  },
  header: {
    fontFamily: "'Architects Daughter', cursive",
    width: "90%",
    fontSize: 24,
    marginLeft: 15,
  },
}


export default NotificationPage
