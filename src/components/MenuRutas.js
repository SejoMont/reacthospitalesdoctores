import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CargarHospitales from "./CargarHospitales";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <NavLink className="navbar-brand" to="/">
                Home
              </NavLink>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/crearHospital"
                  >
                    Crear Hospital
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/listaHospitales"
                  >
                    Lista Hospitales
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hospitales
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <CargarHospitales />
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/tabla/4"
                  >
                    Tabla de Multiplicar 4
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
