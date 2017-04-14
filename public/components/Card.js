import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
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
import SocialBar from './SocialBar'


// CardWithAvatar start
class CardCustom extends React.Component {
   propTypes = {
      cardHeader : PropTypes.shape({
         title: PropTypes.string.isRequired,
         profile: PropTypes.string.isRequired,
         avatar: PropTypes.string.isRequired,
         timeAdded : PropTypes.string.isRequired,
     }),
     videoId : PropTypes.string.isRequired,
     itemChips: PropTypes.shape({
         conditions : PropTypes.string.isRequired,
         size : PropTypes.string.isRequired,
         liters : PropTypes.string.isRequired,
         price : PropTypes.string.isRequired,
      }),
  }

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
              <YouTubeEmbed videoId={videoId} />
          </CardMedia>
              <CardTitle 
                  title={ <strong> {cardHeader.title} </strong> }
                  style={cardStyle.title}
              />
          <CardText>
              <ItemChips chips={itemChips}/>
          </CardText>
          <CardActions>
              <SocialBar />
          </CardActions>
        </Card>
      </Paper>
    )
  }
}


// card with avatar end -----------------------------------------


// card with avatar and style
const cardStyle = {
    paper: {
        marginBottom: 20,
        marginTop: 20,
        width: 680,
    },
    header : {
        marginLeft: 5,
    },
    title : {
        marginLeft: 5,
        height: 15,
    },
}

// youtube embed
const YouTubeEmbed = ( videoId ) => (
    <div style={{marginLeft: "2.5%"}}>
        <iframe 
            width="640" 
            height="360" 
            frameBorder="0"
            src={"https://www.youtube.com/embed/" + videoId + "?controls=1"}>
        </iframe>
    </div>
)

// end youtube embed -----------------------------------------

// chips layout and style
const itemStyles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}

const ItemChips = ({ chips }) => (
    <div style={itemStyles.wrapper}>
      <Chip style={itemStyles.chip} > Conditions: {chips.conditions} </Chip> 
      <Chip style={itemStyles.chip} > Size: {chips.size } </Chip> 
      <Chip style={itemStyles.chip} > Liters: {chips.liters }lt </Chip> 
      <Chip style={itemStyles.chip} > Price: {chips.price }$ </Chip>
    </div>
)
// chip style and layout end -------------------------------


export default CardCustom
