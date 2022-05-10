import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import {
  AdobeSpectrum,
  GoogleMUI,
  MicrosoftFluent,
  AntDesign,
  Chackra,
  Bootstrap,
} from './components/design-systems';
import { Intro } from './components/Intro';

const routeMap = {
  Intro: '/',
  AdobeSpectrum: '/Spectrum',
  GoogleMUI: '/Mui',
  MicrosoftFluent: '/Fluent',
  AntDesign: '/AntDesign',
  Chackra: '/Chackra',
  Bootstrap: '/Bootstrap',
};

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Design System - onClick focus</h1>
          <ul className="header">
            <li>
              <NavLink exact to={routeMap.Intro}>
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
            <Route exact path={routeMap.Intro} component={Intro} />
            <Route exact path={routeMap.Intro} component={Intro} />
            <Route path={routeMap.AdobeSpectrum} component={AdobeSpectrum} />
            <Route
              path={`#${routeMap.AdobeSpectrum}`}
              component={AdobeSpectrum}
            />
            <Route path={routeMap.GoogleMUI} component={GoogleMUI} />
            <Route path={`#${routeMap.GoogleMUI}`} component={GoogleMUI} />
            <Route
              path={routeMap.MicrosoftFluent}
              component={MicrosoftFluent}
            />
            <Route
              path={`#${routeMap.MicrosoftFluent}`}
              component={MicrosoftFluent}
            />
            <Route path={routeMap.AntDesign} component={AntDesign} />
            <Route path={`#${routeMap.AntDesign}`} component={AntDesign} />
            <Route path={routeMap.Chackra} component={Chackra} />
            <Route path={`#${routeMap.Chackra}`} component={Chackra} />
            <Route path={routeMap.Bootstrap} component={Bootstrap} />
            <Route path={`#${routeMap.Bootstrap}`} component={Bootstrap} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
