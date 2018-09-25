import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { setRoute } from "../../redux/routeStates";
import { withRouter } from "react-router-dom";
import Main from "./Main";

const styles = theme => ({
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