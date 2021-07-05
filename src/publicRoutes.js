import AddEmployee from "./pages/AddEmloyee";
import HomePage from "./pages/HomePage";

export const PUBLIC_ROUTES = {
  AddEmployee: {
    path: "/addEmployee",
    component: AddEmployee,
  },
  HomePage: {
    path: "/",
    component: HomePage,
  },
};
