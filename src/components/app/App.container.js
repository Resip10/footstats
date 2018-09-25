import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import App from "./App";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100vh'
  }
});

const mapStateToProps = (state) => ({
  isMenuOpen: state.mainStates.isMenuOpen
});

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(mapStateToProps)
)(App);