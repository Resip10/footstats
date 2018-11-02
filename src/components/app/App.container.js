import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import App from "./App";

const styles = theme => ({});

const mapStateToProps = (state) => ({
  isMenuOpen: state.mainStates.isMenuOpen,
  competitionInfo: state.competitionStates.info,
  teams: state.competitionStates.teams,
  standings: state.competitionStates.standings
});

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(mapStateToProps)
)(App);