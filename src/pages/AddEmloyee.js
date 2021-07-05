import React, { Component } from "react";
import InputForm from "../components/InputForm";

class AddEmployee extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">New employee</h1>
        <div className="d-flex justify-content-center ">
          <InputForm />
        </div>
      </div>
    );
  }
}

export default AddEmployee;
