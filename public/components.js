import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import {
    AppBar, 
    Avatar,
    Drawer,
    IconButton,
    GridList,
    GridTile,
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText,
    CardActions,
    FlatButton,
    Chip,
    AutoComplete,
    Paper,
} from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close'


const iconStyle = {
    social: {
        marginRight: 12,
        marginLeft: 12,
        marginTop: 0,
        marginBottom : 4,
    },
    like : {
        marginRight: 440,
        marginLeft: 24,
        marginTop: 0,
        marginBottom : 4,
    },
}

const SocialBar = () => (
    <div>
        <FontAwesome name="heart" size="2x" style={iconStyle.like}/>
        <FontAwesome name="youtube-play" size="2x" style={iconStyle.social} />
        <FontAwesome name="twitter-square" size="2x" style={iconStyle.social} />
        <FontAwesome name="facebook-official" size="2x" style={iconStyle.social} />
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
};

const ItemChips = () => (
    <div style={itemStyles.wrapper}>
      <Chip style={itemStyles.chip} > Conditions: Good </Chip> 
      <Chip style={itemStyles.chip} > Size: 256x46 </Chip> 
      <Chip style={itemStyles.chip} > Liters: 85lt </Chip> 
      <Chip style={itemStyles.chip} > Price: 1900$ </Chip>
    </div>
)

const YouTubeEmbed = () => (
    <div style={{marginLeft: "2.5%"}}>
        <iframe 
            width="640" 
            height="360" 
            frameBorder="0"
            src="https://www.youtube.com/embed/kI1-E6Bm-70?controls=1">
        </iframe>
    </div>
)

// Card with avatar goes inside the grid as main element and contains the videos
const CardWithAvatar = () => (
    <Paper zDepth={1}>
      <Card>
        <CardHeader
        title="Avatar Name Url"
        subtitle="added item XXX time ago"
        avatar="images/avatar.jpg"
        />
        <CardMedia>
            <YouTubeEmbed/>
        </CardMedia>
        <CardTitle title="Simmer Quantum 85lt" />
        <CardText>
            <ItemChips/>
        </CardText>
        <CardActions>
        <SocialBar />
        </CardActions>
      </Card>
    </Paper>
);

const source = ["board","sails","misc"]
const searchStyle = {
    paper: {
        align: "center",
        width: "100%",
        marginTop : 20,
        marginLeft: "26%",
        marginRight: "26%",
        backgroundColor: "#FFFFFF",
    },
    input: {
        width : "90%",
        marginLeft: "5%",
    }
}

const SearchBar = () => (
    <div style={searchStyle.paper}>
        <Paper zDepth={2} >
            <AutoComplete 
                name="autocomp" 
                fullWidth={true} 
                dataSource={source} 
                hintText="Search for windsurf gear"
                style={searchStyle.input}
            />
        </Paper>
    </div>
)

// Grid styles
const gridStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: 20,
    width: 680,
    height: 1000,
    overflowY: 'auto',
  },
}


// Actual grid
const CustomGridList = () => (
  <div style={gridStyles.root}>
        <SearchBar />
    <GridList cellHeight={680} cols={1} style={gridStyles.gridList} >
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

const barStyle = {
    right: {
        marginTop: 3,
        marginRight: 96,
    },
    left: {
        marginTop: 3,
        marginLeft: 96,
    },
}
// Top app bar contains a drawer as well
class CustomAppBar extends React.Component {
    state = { 
        open: false, 
    }

    constructor(props) {
        super(props)
        this.state = {open: false}
    }

    handleClose = () => this.setState({open: false});
    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    title={<span> WaterAndBoards </span>}
                    iconElementRight={< Avatar style={barStyle.right} src="images/avatar.jpg" />}
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

export {CustomAppBar, CustomGridList};
