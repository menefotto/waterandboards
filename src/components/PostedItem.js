import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  CardHeader, 
  CardActions, 
} from 'material-ui/Card'
import ButtonLink from './ButtonLink'
import Social from '../containers/Social'
import YouTube from '../containers/YouTube'


class PostedItem extends React.Component {

    render(){
    const videoId = this.props.videoId
    const itemChips = this.props.itemChips
    const cardHeader = this.props.cardHeader
    //const socialLink = this.props.socialLink
 
    const cStylePaper = {...cardStyle.paper, width: this.props.size.w + 40}
    return(
      <div style={cStylePaper}>
        <CardHeader
          style={cardStyle.header}
          avatar={cardHeader.avatar}
          subtitle={cardHeader.timeAdded}
          title={<ButtonLink text={<strong>{cardHeader.profile}</strong>} to={"#"} />}
        />
        <div>
          <YouTube 
            videoId={videoId} 
            idx={this.props.index} 
            size={this.props.size}
          />
        </div>
        <div style={cardStyle.title}>
          <ButtonLink text={<h2> {cardHeader.title} </h2>} to={"#"} />
        </div>
        <div>
          <ItemChips chips={itemChips}/>
        </div>
        <div>
          <Social index={this.props.index}/>
        </div>
      </div>
    )
  }
}

PostedItem.propTypes = {
  cardHeader : PropTypes.shape({
    title: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    timeAdded : PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  videoId : PropTypes.string.isRequired,
  itemChips: PropTypes.shape({
    conditions : PropTypes.string.isRequired,
    size : PropTypes.string.isRequired,
    liters : PropTypes.string.isRequired,
    price : PropTypes.string.isRequired,
  }),
  size: PropTypes.object.isRequired,
}

const cardStyle = {
  paper : {
    width: 680,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#FFF",
  },
    header : {
    marginLeft: 5,
  },
  title : {
    height: 15,
    marginLeft: 25,
  },
}


const ItemChips = ({ chips }) => (
    <div style={itemStyles.wrapper}>
      <p style={itemStyles.chip} > Conditions: {chips.conditions} </p> 
      <p style={itemStyles.chip} > Size: { chips.size } </p> 
      <p style={itemStyles.chip} > Liters: { chips.liters }lt </p> 
      <p style={itemStyles.chip} > Price: { chips.price }$ </p>
    </div>
)

const itemStyles = {
  chip: {
    padding: 5,
    display: 'inline-block',
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 25,
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#E0E0E0',
    backgroundColor: '#E0E0E0',
    fontFamily: 'Times New Roman, Times, serif',
  },
  wrapper: {
    marginLeft: 20,
  },
}


export default PostedItem
