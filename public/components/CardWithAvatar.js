import React from 'react';
import ReactDOM from 'react-dom';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper'; 
import {
  Card, 
  CardHeader, 
  CardTitle, 
  CardActions, 
  CardMedia, 
  CardText
} from 'material-ui/Card';
import SocialBar from './SocialBar';


// CardWithAvatar start
const CardWithAvatar = () => (
    <Paper zDepth={1} style={cardStyle.paper}>
      <Card>
        <CardHeader
        title="Avatar Name Url"
        subtitle="added item XXX time ago"
        avatar="images/avatar.jpg"
        style={cardStyle.header}
        />
        <CardMedia>
            <YouTubeEmbed videoid="7AsiCX4Z4Eo"/>
        </CardMedia>
            <CardTitle 
                title={ <strong> Simmer Quantum 85lt </strong> }
                style={cardStyle.title}
            />
        <CardText>
            <ItemChips/>
        </CardText>
        <CardActions>
            <SocialBar />
        </CardActions>
      </Card>
    </Paper>
);
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
class YouTubeEmbed extends React.Component {
 
    render(){
        var source = "https://www.youtube.com/embed/" +
        this.props.videoid + "?controls=1";
        return(
            <div style={{marginLeft: "2.5%"}}>
                <iframe 
                    width="640" 
                    height="360" 
                    frameBorder="0"
                    src={source}>
                </iframe>
            </div>
        )
    }
}
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
};

const ItemChips = () => (
    <div style={itemStyles.wrapper}>
      <Chip style={itemStyles.chip} > Conditions: Good </Chip> 
      <Chip style={itemStyles.chip} > Size: 256x46 </Chip> 
      <Chip style={itemStyles.chip} > Liters: 85lt </Chip> 
      <Chip style={itemStyles.chip} > Price: 1900$ </Chip>
    </div>
)
// chip style and layout end -------------------------------


export default CardWithAvatar;
