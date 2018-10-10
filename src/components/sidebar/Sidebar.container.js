import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from "./Sidebar";

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: theme.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  expansionHeader: {
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  selected: {
    backgroundColor: theme.palette.action.selected
  }
});

const mapStateToProps = (state) => ({
  isMenuOpen: state.mainStates.isMenuOpen,
  appRoute: state.routeStates.name,
  competitionInfo: state.competitionStates.info,
  teams: state.competitionStates.teams,
  standings: state.competitionStates.standings,
  activeTeam: state.competitionStates.activeTeam
});

const mapDispatchToProps = dispatch => {};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(Sidebar);