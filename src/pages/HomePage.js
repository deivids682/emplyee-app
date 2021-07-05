import React, { Component } from "react";
import styled from "styled-components";

class HomePage extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <table id="customers">
          <tr>
            <Th>Company</Th>
            <Th>Contact</Th>
            <Th>Country</Th>
          </tr>
          <Tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </Tr>
          <Tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
          </Tr>
        </table>
      </div>
    );
  }
}

export default HomePage;

const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: black;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;

const Tr = styled.tr`
  td {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;

    border: 1px solid #ddd;
    padding: 8px;
  }
  :nth-child(even) {
    background-color: #f2f2f2;
    color: black;
  }

  :nth-child(odd) {
    background-color: black;
    color: white;
  }
`;
