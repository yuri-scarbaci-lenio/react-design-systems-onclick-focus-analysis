import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, Routes } from "react-router-dom";
import {
  AdobeSpectrum,
  GoogleMUI,
  MicrosoftFluent,
  AntDesign,
  Chackra,
  Bootstrap,
} from "./components/design-systems";
import { Intro } from "./components/Intro";

const routeMap = {
  Intro: "/",
  AdobeSpectrum: "/Spectrum",
  GoogleMUI: "/Mui",
  MicrosoftFluent: "/Fluent",
  AntDesign: "/AntDesign",
  Chackra: "/Chackra",
  Bootstrap: "/Bootstrap",
};

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Design System - onClick focus</h1>
          <ul className="header">
            <li>
              <NavLink to={routeMap.Intro}>
                Intro
              </NavLink>
            </li>
            <li>
              <NavLink to={routeMap.AdobeSpectrum}>Spectrum</NavLink>
            </li>
            <li>
              <NavLink to={routeMap.GoogleMUI}>Material-UI</NavLink>
            </li>
            <li>
              <NavLink to={routeMap.MicrosoftFluent}>Fluent-Design</NavLink>
            </li>
            <li>
              <NavLink to={routeMap.AntDesign}>Ant-Design</NavLink>
            </li>
            <li>
              <NavLink to={routeMap.Chackra}>Chackra-UI</NavLink>
            </li>
            <li>
              <NavLink to={routeMap.Bootstrap}>React-bootstrap</NavLink>
            </li>
          </ul>

          <div className="content">
            <Routes>
              <Route path={routeMap.Intro} element={<Intro/>} />
              <Route path={routeMap.AdobeSpectrum} element={<AdobeSpectrum/>} />

              <Route path={routeMap.GoogleMUI} element={<GoogleMUI/>} />
              <Route
                path={routeMap.MicrosoftFluent}
                element={<MicrosoftFluent/>}
              />
              <Route path={routeMap.AntDesign} element={<AntDesign/>} />
              <Route path={routeMap.Chackra} element={<Chackra/>} />
              <Route path={routeMap.Bootstrap} element={<Bootstrap/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
