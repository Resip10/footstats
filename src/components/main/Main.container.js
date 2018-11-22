import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { setRoute } from "../../redux/routeStates";
import { withRouter } from "react-router-dom";
import Main from "./Main";

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    ...theme.mixins.toolbar
  }
});

const mapStateToProps = (state) => ({
  appRoute: state.routeStates.name
});

const mapDispatchToProps = dispatch => {
  return {
    setRoute: data => {
      dispatch(setRoute(data));
    }
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Main);