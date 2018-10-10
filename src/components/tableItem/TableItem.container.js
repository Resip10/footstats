import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import TableItem from "./TableItem";

const styles = theme => ({});

const mapStateToProps = (state) => ({
});

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(mapStateToProps)
)(TableItem);