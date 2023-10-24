import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./rutasParametros/Home";
import NotFound from "./rutasParametros/NotFound";
import MenuRutas from "./MenuRutas";
import CargarMedicos from "./CargarMedicos";
import CrearHospital from "./CrearHospital";
import ListaHospitales from "./ListaHospitales";

export default class Router extends Component {
  render() {
    function HospitalElement() {
      var { hospital } = useParams();

      return <CargarMedicos hospital={hospital}/>
    }

    return (
      <BrowserRouter>
        {/* Aqui incluiremos los dibujos estaticos para el menu de rutas */}
        <MenuRutas/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crearHospital" element={<CrearHospital/>}/>
          <Route path="/listaHospitales" element={<ListaHospitales/>}/>
          <Route path="/hospital/:hospital" element={<HospitalElement/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

