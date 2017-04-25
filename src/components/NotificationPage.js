import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import InfiniteScroll from 'react-infinite-scroller'
import { NotificationItem } from './Notifications'

class NotificationPage extends React.Component{

  render(){

    const items = []
    const list = this.props.notifications.list

    for (let idx = 0; idx < list.length; idx++){
      items.push(<NotificationItem key={idx} idx={idx} text={list[idx].text}/>)
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
          {items}   
        </InfiniteScroll> 
      </div>
    )
  }
}

NotificationPage.propTypes = {
  notifications: PropTypes.object.isRequired,
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
