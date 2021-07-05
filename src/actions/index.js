export const addEmployee = (employeeData) => async (dispatch) => {
  dispatch({
    type: actionsTypes.ADD_EMPLOYEE,
    payload: employeeData,
  });
};
