import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import PaperItem from "./PaperItem";

const styles = theme => ({
  title: {
    backgroundColor: theme.palette.secondary.main
  }
});

const mapStateToProps = (state) => ({
});

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(mapStateToProps)
)(PaperItem);