import { actionsTypes } from "../actions/constants";

const initState = {
  employeeList: [],
};

export default (state = initState, action) => {
  if (action.type === actionsTypes.ADD_EMPLOYEE) {
    state.employeeList.push(action.payload);
    return state;
  }
  return state;
};
