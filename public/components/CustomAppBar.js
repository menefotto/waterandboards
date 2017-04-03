import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


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
                    iconElementLeft={<Avatar style={barStyle.left} src="images/waterdrop.png" />} 
                    onRightIconButtonTouchTap={this.handleToggle}
                />
                <Drawer openSecondary={true} open={this.state.open} >
                    <AppBar
                        title={<span> Settings </span>}
                        iconElementLeft={<IconButton onTouchTap={this.handleClose}> <NavigationClose /> </IconButton>}
                    />
                </Drawer>
            </div>
        )
    }
}
//  app bar end ----------------------------------------------------


const Logged = () => (
    <Avatar style={barStyle.right} src="images/avatar.jpg" />
)

const Login = () => (
    <RaisedButton default={true} style={barStyle.rightLogin} >
        Login
    </RaisedButton>
)


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



export default CustomAppBar;
