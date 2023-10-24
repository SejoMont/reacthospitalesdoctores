import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";

export default class ListaHsopitales extends Component {
  state = {
    hospitales: [],
    status: false,
  };

  loadHospitales = () => {
    var request = "webresources/hospitales";
    var url = Global.urlApiHospitales + request;

    axios.get(url).then((response) => {
      this.setState({
        hospitales: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    return (
      <div>
        <h1>Lista Hospitales</h1>
        <table className="table text-center table-striped">
          <thead>
            <tr>
              <th>ID Hospital</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Camas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true &&
              this.state.hospitales.map((hospital, index) => {
                return (
                  <tr key={index}>
                    <td>{hospital.idhospital}</td>
                    <td>{hospital.nombre}</td>
                    <td>{hospital.direccion}</td>
                    <td>{hospital.telefono}</td>
                    <td>{hospital.camas}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
