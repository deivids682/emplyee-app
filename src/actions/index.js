import fetchWrapper from "./../fetchWrapper";
import { actionsTypes, API_URL } from "./constants";

export const addEmployee = (employeeData, callback) => async (dispatch) => {
  const response = await fetchWrapper.post(`${API_URL}/employes`, employeeData);

  dispatch({
    type: actionsTypes.ADD_EMPLOYEE,
    payload: response,
  });
  callback();
};
