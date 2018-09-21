import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { openSideMenu } from "../../redux/mainStates";
import Header from "./Header";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.drawerWidth,
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  }
});

const mapStateToProps = (state) => ({
  isMenuOpen: state.mainStates.isMenuOpen
});

const mapDispatchToProps = dispatch => {
  return {
    openMenu: data => {
      dispatch(openSideMenu(data));
    }
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);
