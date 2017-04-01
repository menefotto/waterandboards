import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import {Card, CardHeader, CardTitle, CardActions, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import ActionSearch from 'material-ui/svg-icons/action/search';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';
import FontAwesome from 'react-fontawesome';

import NavigationClose from 'material-ui/svg-icons/navigation/close';


// social bar style and layout
const iconStyle = {
   social: {
      width: 32,
      marginRight: 8, 
      marginLeft: 8, 
      marginTop: 0,
      marginBottom : 4,
  },
  like : {
      width: 32,
      marginRight: 452,
      marginLeft: 24,
      marginTop: 0,
      marginBottom : 4,
  },
}

const SocialBar = () => (
  <div>
      <a>
        <FontAwesome name="heart" size="2x" style={iconStyle.like}/>
      </a>
      <a>
        <FontAwesome name="youtube-play" size="2x" style={iconStyle.social} />
      </a>
      <a>
        <FontAwesome name="twitter-square" size="2x" style={iconStyle.social} />
      </a>
      <a>
        <FontAwesome name="facebook-official" size="2x" style={iconStyle.social} />
      </a>
  </div>
)
// end social bar --------------------------------------


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


// search style and data source
const source = ["board","sails","misc"]
const searchStyle = {
    paper: {
        align: "center",
        width: 680,
        height: 50,
        marginTop : 20,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
    },
    input: {
        width : "75%",
        marginLeft: "5%",
        marginRight: "2%",
    }
}

const SearchButton = () => (
    <RaisedButton
        secondary={true}
        icon={<ActionSearch />}
    >
    </RaisedButton>
)

const SearchBar = () => (
    <div style={searchStyle.paper}>
        <Paper zDepth={2} >
            <AutoComplete 
                name="autocomp" 
                fullWidth={true}
                style={searchStyle.input}
                dataSource={source} 
                hintText="Search for windsurf gear"
                autoFocus={true}
            />
            <SearchButton style={{marginRight: "5%" }}/>
        </Paper>
    </div>
)
// end search style and data source ------------------------------


// Grid style and layout 
const gridStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: 20,
    width: 720,
    height: 1000,
    overflowY: 'auto',
  },
}


// Actual grid
const CustomGridList = () => (
  <div style={gridStyles.root}>
    <GridList cellHeight='auto' cols={1} style={gridStyles.gridList} >
        <SearchBar />
        <GridTile>
            <CardWithAvatar/>
        </GridTile>
        <GridTile>
            <CardWithAvatar/>
        </GridTile>
        <GridTile>
            <CardWithAvatar/>
        </GridTile>
        <GridTile>
            <CardWithAvatar/>
        </GridTile> 
    </GridList> 
  </div>
)
// end grid style and layout ---------------------------------------


// app bar style and layout
const barStyle = {
    rightLogin: {
        marginTop: 4,
        marginRight: 96,
    },
    rightLogged: {
        marginTop: 4,
        marginRight: 96,
    },
    left: {
        marginTop: 4,
        marginLeft: 96,
    },
    title: {
        fontFamily: "'Architects Daughter', cursive"
    }
}

const Logged = () => (
    < Avatar style={barStyle.right} src="images/avatar.jpg" />
)

const Login = () => (
    <RaisedButton default={true} style={barStyle.rightLogin} >
        Login
    </RaisedButton>
)

class CustomAppBar extends React.Component {
    state = { 
        open: false,
        logged: false,
    }

    constructor(props) {
        super(props)
        this.state = {open: false}
    }

    handleClose = () => this.setState({open: false});
    handleChange = (event, logged) => { this.setState({logged: logged});};
    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    title={<span> WaterAndBoards </span>}
                    titleStyle={barStyle.title}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                    iconElementLeft={< Avatar style={barStyle.left} src="images/waterdrop.png" />} 
                    onRightIconButtonTouchTap={this.handleToggle}
                />
                <Drawer openSecondary={true} open={this.state.open} >
                    <AppBar
                        title={<span> Settings </span>}
                        iconElementLeft={<IconButton onTouchTap={this.handleClose}><NavigationClose /></IconButton>}
                    />
                </Drawer>
            </div>
        )
    }
}
//  app bar end ----------------------------------------------------


export {CustomAppBar, CustomGridList};
