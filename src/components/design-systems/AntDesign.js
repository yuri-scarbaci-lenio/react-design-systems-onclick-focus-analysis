import React from "react";
import { Button } from "antd";
import { DemoBox } from "./helpers/DemoBox";
export const AntDesign = () => (
  <div className="contentWrapper">
    <div>
      <h2>Antgroup - Ant Design (react flavour)</h2>
      <p>
        <a
          href="https://ant.design/components/button/"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </p>

      <DemoBox>
        <Button>AntDesign Button</Button>
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
