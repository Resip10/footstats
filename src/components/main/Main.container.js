import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
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

const mapStateToProps = (state) => ({});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(Main);