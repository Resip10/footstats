import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import PaperItem from "./PaperItem";

const styles = theme => ({
  root: {
    padding: '10px'
  },
  title: {
    padding: '5px',
    marginTop: '-20px',
    borderRadius: '3px',
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