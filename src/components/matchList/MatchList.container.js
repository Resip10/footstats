import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import MatchList from "./MatchList";

const styles = theme => ({});

const mapStateToProps = (state) => ({
  teams: state.competitionStates.teams.teams
});

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(mapStateToProps)
)(MatchList);