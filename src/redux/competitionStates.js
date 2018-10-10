//- Const
const UPDATE_ALL_DATA = "UPDATE_ALL_DATA";

//- Actions
export const updateCompetition = data => ({
  type: UPDATE_ALL_DATA,
  data: data
});

//- State
const initialState = {
  info: {},
  teams: {},
  standings: {},
  matches: {},
  activeTeam: -1
};

//- Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ALL_DATA:
      return {
        info: action.data.info,
        teams: action.data.teams,
        standings: action.data.standings,
        activeTeam: action.data.activeTeam
      };

    default:
      return state;
  }
};
