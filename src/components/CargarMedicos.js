import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";

export default class CargarMedicos extends Component {
  state = {
    doctores: [],
  };

  cargarDoctores = () => {
    var id = parseInt(this.props.hospital);

    var request = "api/Doctores/DoctoresHospital/" + id;
    var url = Global.urlApiDoctores + request;

    axios.get(url).then((response) =>
      this.setState({
        doctores: response.data,
      })
    );
  };

  componentDidMount = () => {
    this.cargarDoctores();
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.hospital != this.props.hospital) {
      this.cargarDoctores();
    }
  };

  render() {
    return (
      <div>
        <h1>ID del Hospital: {this.props.hospital}</h1>
        <table className="table text-center">
          <thead>
            <tr>
              <th>idDoctor</th>
              <th>Apellidos</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>id Hospital</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctores.map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.idDoctor}</td>
                <td>{doctor.apellido}</td>
                <td>{doctor.especialidad}</td>
                <td>{doctor.salario}</td>
                <td>{doctor.idHospital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
