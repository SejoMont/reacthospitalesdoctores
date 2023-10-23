import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class CargarHospitales extends Component {
  state = {
    hospitales: [],
  };

  loadHospitales = () => {
    var request = "/webresources/hospitales";
    var url = Global.urlApiHospitales + request;

    axios.get(url).then((response) => {
      this.setState({
        hospitales: response.data
      })
    })
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    return this.state.hospitales.map((hospital, index) => (
      <li key={index} className="dropdown-item">
        <NavLink to={`hospital/${hospital.idhospital}`} className="dropdown-item">
          {hospital.idhospital} - {hospital.nombre}
        </NavLink>
      </li>
    ));
  }
}
