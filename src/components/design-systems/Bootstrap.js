import React from "react";
import Button from "react-bootstrap/Button";
import { DemoBox } from "./helpers/DemoBox";
import 'bootstrap/dist/css/bootstrap.min.css';
export const Bootstrap = () => (
  <div className="contentWrapper">
    <div>
      <h2>Independent - Bootstrap (react-bootstrap flavour)</h2>
      <p>
        <a
          href="https://react-bootstrap.github.io/components/buttons/"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </p>
      <DemoBox>
        <Button variant="primary">Bootrasp UI Button placeholder</Button>
      </DemoBox>
    </div>
    <div className="conclusionBox">
      <div className="conclusionGrid">
        <h3 className="conclusionHeader">Conclusions - on click:</h3>
        <b>Focus</b>
        <b>Apply particular style</b>
        <b>Browser apply :focus pseudo-selector</b>
        <div>✅</div>
        <div>✅</div>
        <div>✅</div>
      </div>

      <div className="extraConclusionInfo">
        <h3>How do they accomplish this?</h3>
        <p>They don't</p>
      </div>
    </div>
  </div>
);
