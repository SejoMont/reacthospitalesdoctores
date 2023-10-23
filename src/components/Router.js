import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./rutasParametros/Home";
import NotFound from "./rutasParametros/NotFound";
import MenuRutas from "./MenuRutas";
import CargarMedicos from "./CargarMedicos";

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
          <Route path="*" element={<NotFound />} />
          <Route path="/hospital/:hospital" element={<HospitalElement/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

