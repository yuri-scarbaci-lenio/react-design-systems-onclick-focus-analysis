import React from "react";
import Button from "@mui/material/Button";
import { DemoBox } from "./helpers/DemoBox";

export const GoogleMUI = () => (
  <div className="contentWrapper">
    <div>
      <h2>Google - Material UI</h2>
      <p>
        <a
          href="https://mui.com/material-ui/react-button/"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </p>
      <DemoBox>
        <Button variant="text">Material UI Button</Button>
      </DemoBox>
    </div>

    <div className="conclusionBox">
      <div className="conclusionGrid">
        <h3 className="conclusionHeader">Conclusions - on click:</h3>
        <b>Focus</b>
        <b>Apply particular style</b>
        <b>Browser apply :focus pseudo-selector</b>
        <div>✅</div>
        <div>❌</div>
        <div>✅</div>
      </div>
      <div className="extraConclusionInfo">
        <h3>How do they accomplish this?</h3>
        <div>
          <p>
            Based on{" "}
            <a
              href="https://github.com/mui/material-ui/blob/5ee5ba06d9bedc7296010ba19bada1c0a1a04719/packages/mui-utils/src/useIsFocusVisible.ts#L165"
              target="_blank"
              rel="noreferrer"
            >
              this functionality
            </a>{" "}
            they attach <span className="actionTarget">event-listeners</span>{" "}
            for <span className="actionTarget">mousedown</span> +{" "}
            <span className="actionTarget">pointerdown</span> +{" "}
            <span className="actionTarget">touchstart</span> +{" "}
            <span className="actionTarget">visibilitychange</span> +{" "}
            <span className="actionTarget">keydown</span>
            and based on those event they track if the event focus event was
            invocked by a click action or a mouse action, if the{" "}
            <span className="action">heuristic</span>
            detects a keyboard interaction then a{" "}
            <span className="actionTarget">className</span> gets added to the
            component
          </p>
          <p>
            {" "}
            <a
              href="https://github.com/mui/material-ui/issues/22425"
              target="_blank"
              rel="noreferrer"
            >
              In this issue
            </a>{" "}
            they are also saying:
          </p>
          <div className="quoteBlock">
            <p>
              If you need a polyfill use the "official" one just like we do:
              https://github.com/WICG/focus-visible
            </p>
          </div>
          <p>
            Which as per the intro-page of the analysis means the implementation
            is <span className="action">heuristic</span> and not so stable, we would probably be better off
            <span className="action">waiting for the official browser support</span>
          </p>
          <p>
            They are also trying to implement an <span className="action">heuristic</span> to detect if the
            browser supports <span className="actionTarget">:focus-visible</span> pseudo-selector, but it's brittle
            and their "graceful-fail" is <span className="action">ignoring the miss-render</span>
          </p>
          <div className="quoteBlock">
            <p>
              {"//"} Browsers not implementing :focus-visible will throw a
              SyntaxError.
            </p>
            <p>{"//"} We use our own heuristic for those browsers. </p>
            <p>
              {"//"} Rethrow might be better if it's not the expected error but
              do we really
            </p>
            <p>{"//"} want to crash if focus-visible malfunctioned?</p>
          </div>
          <p>
            Another things that Material UI is trying to handle is applying the
            focus correctly even when user changes between browser tabs
          </p>
          <h3>Critical points</h3>
          <div>
            <ul>
              <li>
                We would have to base all our styling on additional
                <span className="actionTarget">className/states</span> that are{" "}
                <span className="action">handled via javascript</span> (heavy
                DOM manipulation - possible performance hit)
              </li>
              <li>
                css pseudo-selector <span className="actionTarget">:focus</span>{" "}
                would be unusable (<span className="action">major rewrite</span>{" "}
                of existing css styling logic, possible edge-cases)
              </li>
              <li>
                future-to-be-usable native css pseudo-selector{" "}
                <span className="actionTarget">:focus-visible</span> would be
                conflicting and inconsistent (creating{" "}
                <span className="action">tech-debt</span>)
              </li>
              <li>
                <span className="action">additional complexity</span> to be
                handled "manually" (not browser-native solution), creating
                <span className="action">additional "fail-point"</span>,{" "}
                <span className="action">additional testing</span>,
                <span className="action">additional maintenance</span>
              </li>
            </ul>
          </div>
          <h3>Known issues</h3>
          <ul>
            <li>
              <a
                href="https://github.com/mui/material-ui/issues/23747"
                target="_blank"
                rel="noreferrer"
              >
                Not working as intended 1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
