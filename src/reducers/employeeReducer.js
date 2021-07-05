import { actionsTypes } from "../actions/constants";

const initState = {
  addEmployee: [
    {
      name: "",
      surname: "",
      birthDate: "",
      position: "",
      hobby: "",
      hasMarried: false,
      hasKid: false,
      phone: "",
    },
  ],
};

export default (state = initState, action) => {
  return state;
};
