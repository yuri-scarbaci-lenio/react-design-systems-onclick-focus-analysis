import React from "react";
import { UsageMoiva } from "./imgs/UsageMoiva";

const TotalsGrid = () => (
  <div class="UsageTotals">
    <div class="focus-visible">
      <h2 class="title-focus-visible">on click -{">"} focus indicator</h2>
      <div class="fluent">
        <h4>Fluent:</h4>
        <h3> ~440k</h3>
      </div>
      <div class="spectrum">
        <h4>Spectrum:</h4>
        <h3> ~14k</h3>
      </div>
      <div class="material">
        <h4>MaterilUI:</h4>
        <h3> ~4.5m</h3>
      </div>
      <div class="focusVisibleTotal">
        <h4>Total:</h4>
        <h3> ~5m</h3>
      </div>
    </div>
    <div class="no-focus-visible">
      <h2 class="title-no-focus-visible">on click -{">"} focus indicator</h2>
      <div class="antd">
        <h4>Antd:</h4>
        <h3> ~3.5m</h3>
      </div>
      <div class="chakra-ui">
        <h4>Chackra-ui:</h4>
        <h3> ~1.2m</h3>
      </div>
      <div class="react-bootstrap">
        <h4>React-bootstrap:</h4>
        <h3> ~4.5m</h3>
      </div>
      <div class="noFocusVisibleTotal">
        <h4>Total:</h4>
        <h3> ~9.2m</h3>
      </div>
    </div>
  </div>
);

export const Usage = () => (
  <div>
    <h2>Popularity of the design systems in 12 may 2022 (react environment)</h2>
    <br />
    <div>
      <p>
        Based on the report generated at{" "}
        <a
          href="https://moiva.io/?npm=@adobe/react-spectrum+@chakra-ui/react+@fluentui/react+@mui/material+antd+react-bootstrap"
          target="_blank"
          rel="noreferrer"
        >
          moiva.io
        </a>
      </p>
      <UsageMoiva />
      <p>
        <span className="actionTarget">react-bootstrap</span> and{" "}
        <span className="actionTarget">material-ui</span> are the most popular
        contenders with <span className="action">over 4 milions downloads</span>
      </p>
      <p>
        followed by <span className="actionTarget">antd</span> with around{" "}
        <span className="action">3.5 milions</span>,{" "}
        <span className="actionTarget">chakra ui</span> with{" "}
        <span className="action">1.2 milions</span>
      </p>
      <p>
        <span className="actionTarget">fluent</span>{" "}
        <span className="action">440 thousands</span> and{" "}
        <span className="actionTarget">spectrum</span>{" "}
        <span className="action">14 thousands</span> as of{" "}
        <date className="action">12 may 2022</date>
      </p>
    </div>
    <hr />
    <h3>how "popular" is the pattern in react web-app</h3>
    <TotalsGrid />
    <p>
      we can (based on this PARTIAL and APROXIMATE market share analysis)
      conclude that <span className="action">in 2022 ~64%</span> of the
      user-base is <span className="action">NOT familiar</span> with click not
      applying focus indicator
    </p>
    <p>
      <b>N.B.</b>
      The percentage of usage of libraries not applying the focus indicator on
      click is <span className="action">on the raise</span>, this means that
      this is a "new" pattern which is not yet "as popular" but it's becoming
      more popular day by day, based on this, it stands to reason to wait for
      focus-visible support from browsers before investing in polyfilling the
      functionality
    </p>
  </div>
);
