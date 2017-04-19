import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Chip from 'material-ui/Chip'
import Paper from 'material-ui/Paper' 
import {
  Card, 
  CardHeader, 
  CardTitle, 
  CardActions, 
  CardMedia, 
  CardText
} from 'material-ui/Card'
import Social from '../containers/Social'
import YouTube from '../containers/YouTube'


class CardCustom extends React.Component {

  render(){
    const videoId = this.props.videoId
    const itemChips = this.props.itemChips
    const cardHeader = this.props.cardHeader
    //    const socialLink = this.props.socialLink
    return(
      <Paper zDepth={1} style={cardStyle.paper}>
        <Card>
          <CardHeader
            title={cardHeader.profile}
            subtitle={cardHeader.timeAdded}
            avatar={cardHeader.avatar}
            style={cardStyle.header}
          />
          <CardMedia>
            <YouTube videoId={videoId} idx={this.props.index} />
          </CardMedia>
            <CardTitle 
              style={cardStyle.title}
              title={<strong> {cardHeader.title} </strong>}
            />
          <CardText>
            <ItemChips chips={itemChips}/>
          </CardText>
          <CardActions>
            <Social index={this.props.index}/>
          </CardActions>
        </Card>
      </Paper>
    )
  }
}

CardCustom.propTypes = {
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
}

const cardStyle = {
  paper: {
    width: 680,
    marginTop: 20,
    marginBottom: 20,
  },
  header : {
    marginLeft: 5,
  },
  title : {
    height: 15,
    marginLeft: 5,
  },
}


const ItemChips = ({ chips }) => (
    <div style={itemStyles.wrapper}>
      <Chip style={itemStyles.chip} > Conditions: {chips.conditions} </Chip> 
      <Chip style={itemStyles.chip} > Size: { chips.size } </Chip> 
      <Chip style={itemStyles.chip} > Liters: { chips.liters }lt </Chip> 
      <Chip style={itemStyles.chip} > Price: { chips.price }$ </Chip>
    </div>
)

const itemStyles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}


export default CardCustom
