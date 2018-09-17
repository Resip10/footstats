//- Const
const SIDE_MENU_OPEN = "SIDE_MENU_OPEN";
const DEFAULT_SIDE_MENU_OPEN = "DEFAULT_SIDE_MENU_OPEN";

//- Actions
export const openSideMenu = data => ({
  type: SIDE_MENU_OPEN,
  isMenuOpen: data
});
export const setDefault = () => ({
  type: DEFAULT_SIDE_MENU_OPEN
});

//- State
const initialState = {
  isMenuOpen: false
};

//- Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SIDE_MENU_OPEN:
      return {
        isMenuOpen: action.isMenuOpen
      };

    case DEFAULT_SIDE_MENU_OPEN:
      return state;

    default:
      return state;
  }
};
