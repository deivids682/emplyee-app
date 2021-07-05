import { useState } from "react";
import { connect } from "react-redux";
import { addEmployee } from "./../actions";

function InputForm({ addEmployee, employeeList }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [position, setPosition] = useState("");
  const [hobby, setHobby] = useState("");
  const [isMarriad, setIsMarriad] = useState(false);
  const [hasKids, setHasKids] = useState(false);
  const [phone, setPhone] = useState("");

  const clearForm = (event) => {
    event.preventDefault();
    clearFormCore();
  };

  const clearFormCore = () => {
    setName("");
    setSurname("");
    setBirthDate("");
    setPosition("");
    setHobby("");
    setIsMarriad(false);
    setHasKids(false);
    setPhone("");
  };

  return (
    <form>
      <input
        value={name}
        type="text"
        className="form-control m-3"
        id="name"
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        value={surname}
        type="text"
        className="form-control m-3"
        id="surname"
        onChange={(event) => setSurname(event.target.value)}
        placeholder="Surname"
      />
      <input
        value={birthDate}
        type="text"
        className="form-control m-3"
        id="birthDate"
        onChange={(event) => setBirthDate(event.target.value)}
        placeholder="Birth Date"
      />
      <input
        value={position}
        type="text"
        className="form-control m-3"
        id="position"
        onChange={(event) => setPosition(event.target.value)}
        placeholder="Position"
      />
      <input
        value={hobby}
        type="text"
        className="form-control m-3"
        id="hobby"
        onChange={(event) => setHobby(event.target.value)}
        placeholder="Hobby"
      />
      <div className="row">
        <div className="col m-3">
          <div className="form-check form-switch ">
            <input
              checked={isMarriad}
              className="form-check-input"
              type="checkbox"
              onClick={(event) => setIsMarriad(event.target.checked)}
              id="isMarriad"
            />
            <label className="form-check-label" for="isMarriad">
              Is marriad
            </label>
          </div>
        </div>
        <div className="col  m-3">
          <div className="form-check form-switch">
            <input
              checked={hasKids}
              className="form-check-input"
              type="checkbox"
              id="hasKids"
              onClick={(event) => setHasKids(event.target.checked)}
            />
            <label className="form-check-label" for="hasKids">
              Has kids
            </label>
          </div>
        </div>
      </div>
      <input
        type="phone"
        value={phone}
        className="form-control m-3"
        id="phone"
        onChange={(event) => setPhone(event.target.value)}
        placeholder="phone"
      />
      <button
        type="button"
        className="btn btn-danger btn-lg m-5"
        onClick={clearForm}
      >
        Clear form
      </button>
      <button
        type="button"
        className="btn btn-primary  btn-lg"
        onClick={() =>
          addEmployee(
            {
              name,
              surname,
              birthDate,
              position,
              hobby,
              isMarriad,
              hasKids,
              phone,
            },
            clearFormCore
          )
        }
      >
        Save
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    employeeList: state.employes.employeeList,
  };
};

export default connect(mapStateToProps, { addEmployee })(InputForm);
