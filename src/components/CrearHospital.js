import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { Navigate } from "react-router-dom";

export default class CrearHospital extends Component {
  state = {
    mensaje: "",
    status: false
  };

  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaDireccion = React.createRef();
  cajaTelefono = React.createRef();
  cajaCamas = React.createRef();

  insertHospital = (e) => {
    e.preventDefault();
    var request = "webresources/hospitales/post";
    var url = Global.urlApiHospitales + request;

    var idhospital = parseInt(this.cajaId.current.value);
    var nombre = this.cajaNombre.current.value;
    var direccion = this.cajaDireccion.current.value;
    var telefono = this.cajaTelefono.current.value;
    var camas = parseInt(this.cajaCamas.current.value);

    var hospital = {
      idhospital: idhospital,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      camas: camas,
    };

    axios.post(url, hospital).then((response) => {
      this.setState({
        mensaje: "Hospital insertado " + nombre + "!!!!",
        status: true
      });
    });
  };

  render() {
    return (
      <div>
        {
          this.state.status == true && (<Navigate to="/listaHospitales"/>)
        }
        <h1>Nuevo Hospital</h1>
        <h2>{this.state.mensaje}</h2>
        <form>
          <label>Id Hospital:</label>
          <input
            type="number"
            className="form-control"
            ref={this.cajaId}
          ></input>
          <br></br>
          <label>Nombre: </label>
          <input
            type="text"
            className="form-control"
            ref={this.cajaNombre}
          ></input>
          <br></br>
          <label>Direccion: </label>
          <input
            type="text"
            className="form-control"
            ref={this.cajaDireccion}
          ></input>
          <br></br>
          <label>Telefono: </label>
          <input
            type="text"
            className="form-control"
            ref={this.cajaTelefono}
          ></input>
          <br></br>
          <label>Camas: </label>
          <input
            type="number"
            className="form-control"
            ref={this.cajaCamas}
          ></input>
          <br></br>
          <button className="btn btn-warning" onClick={this.insertHospital}>
            Crear
          </button>
        </form>
      </div>
    );
  }
}
