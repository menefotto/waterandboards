import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { 
  Toolbar, 
  ToolbarGroup, 
  ToobarSeparator, 
  ToolbarTitle 
} from 'material-ui/Toolbar'
import Avatar from 'material-ui/Avatar'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import SignUp from "./SignUp"
import Logged from "./Logged"
import SearchBar from "./SearchBar"


class ToolBar extends React.PureComponent{
  static contextTypes = {
    store: PropTypes.object.isRequired
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
    const { AppBarRdx, LoginPageRdx } = getState()

    let rightElement, searchElement
    if (AppBarRdx.simplebar){
      rightElement = <span />
    } else {
      rightElement = AppBarRdx.logged ?
        <Logged 
          hMenu={this.props.hMenu}
          hSettings={this.props.hOpen}
          hRequestClose={this.props.hRequestClose}
          hSeeAllNotifications={this.props.hSeeAllNotifications}
        />:
        <SignUp onClick={this.props.hLogin} />
    }

    return(
      <div style={barStyle.bar}>
        <Toolbar>
          <ToolbarGroup style={barStyle.left} firstChild={true}>
            <Avatar src={this.props.logo} />
            <ToolbarTitle text={this.props.bTitle} style={barStyle.title} />
          </ToolbarGroup>
          <ToolbarGroup 
            style={
              AppBarRdx.logged ? 
                barStyle.centerLogged : barStyle.centerSignUp
            }
          >
            {
              AppBarRdx.simplebar ?
              <span />:
              <SearchBar onClick={this.props.hSearch} />
            }
          </ToolbarGroup>
          <ToolbarGroup 
            style={
              AppBarRdx.logged ? 
                barStyle.rightLogged : barStyle.right
            } 
            lastChild={true}
          >
            {rightElement}
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

ToolBar.propTypes = {
  logo: PropTypes.string,
  bTitle: PropTypes.string,
  element: PropTypes.element,
  hOpen: PropTypes.func.isRequired,
  hLogin: PropTypes.func.isRequired,
  hSearch: PropTypes.func.isRequired,
  hMenu: PropTypes.func.isRequired,
  hRequestClose: PropTypes.func.isRequired,
  hSeeAllNotifications: PropTypes.func.isRequired,
}

ToolBar.defaultProps = {
  logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/wgALCAAyADIBAREA/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAYBAgUDBP/aAAgBAQAAAAFfLbeHAdG6UwBl2hSzQeupyRoHb0lUSpoNVlzGAJgP/8QAHhAAAgIBBQEAAAAAAAAAAAAAAQIDBBAFEhMgIRH/2gAIAQEAAQUCwqljHRCIfTlEMj1q6wLbBNXpp0O2PFytwvmJdsWJYxLGfDiu/JBgkKGO5sVLJgaORJAzKguXOQdSfvT/xAAiEAABAQgDAQEAAAAAAAAAAAABAgADEBEgITFREzJBEmH/2gAIAQEABj8ChJImWLx+cX+RSEpyW2r0s8lqnlOTiMx0NCRoRKD7QlX5Ek4DE7je6DlpoUC01EANxu+vp3Vej//EACAQAQABBAICAwAAAAAAAAAAAAERABAxYSAhQXFRkfH/2gAIAQEAAT8hsHYmAqTlD9FKRgJ8HAo5wV0+FpIMuIkDx6FkkhpIvv61rgRfhL4jR9UFByXMrR93cuAla3uW8KlgPjdQsOq3lpaJuLAoyMNIpS++H//aAAgBAQAAABAwQYGDywh//8QAJBABAAEDBAEEAwAAAAAAAAAAAREAIVEQIDFBYXGhscGBkdH/2gAIAQEAAT8Q0Z68ClaR4HSRwTD9D90Y4UvQeDYkF0ChAAeK74MFEity2BF9jbLClR6f6/GgIAiQj3T5zcc8vrZwHewahISgcun8NCHCImE1eyVHhFnUiiCOgqwsWXEs6sTTs8rDzQ7vAVz1OSlBR0gpUElds+AY+doJQcIw1Ji5U7P/2Q==",
  bTitle: "WaterAndBoards",
}

const barStyle = {
  bar: {
    position: 'fixed',
    overflow: 'hidden',
    zIndex: 1,
    height: 70,
    width: "100%",
  },
  left: {
    marginLeft: "2%",
  },
  right: {
    marginRight: "2%",
  },
  rightLogged: {
    marginRight: "2%",
  },
  centerLogged: {
    top: -7,
    right: 0,
    left: 0,
    width: 400,
    height: 50,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  centerSignUp: {
    position: 'absolute',
    top: -7,
    right: 0,
    left: 0,
    width: 400,
    height: 50,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 28,
    marginLeft: 4,
    marginRight: 2,
    fontFamily: "'Architects Daughter', cursive",
  }
}


export default ToolBar
