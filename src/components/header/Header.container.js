import { connect } from "react-redux";
import Header from "./Header";
import { openSideMenu } from "../../redux/mainStates";

const mapStateToProps = (state, {isMenuOpen}) => ({
  isMenuOpen
});

const mapDispatchToProps = dispatch => {
  return {
    openMenu: data => {
      dispatch(openSideMenu(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
