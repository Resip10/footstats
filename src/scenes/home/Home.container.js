import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Home from "./Home";

const styles = theme => ({});

const mapStateToProps = (state) => ({
  standings: state.competitionStates.standings,
  matches: state.competitionStates.matches,
  nextTour: state.competitionStates.info.currentSeason.currentMatchday
});

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(mapStateToProps)
)(Home);