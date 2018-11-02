export const ROUTES = {
  HOME: "home",
  STATS: "stats",
  CLUBS: "clubs"
};

const ROUTE_SET = "ROUTE_SET";

//- Actions
export const setRoute = name => ({
  type: ROUTE_SET,
  payload: name
});

//- State
const initialState = {
  name: "home"
};

//- Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_SET:
      return { name: action.payload };

    default:
      return state;
  }
};
