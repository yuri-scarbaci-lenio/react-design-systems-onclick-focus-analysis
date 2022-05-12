/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Stack } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { DemoBox } from "./helpers/DemoBox";

const stackTokens = { childrenGap: 40 };

export const MicrosoftFluent = () => (
  <div className="contentWrapper">
    <div>
      <h2>Microsoft - Fluent</h2>
      <p>
        <a
          href="https://developer.microsoft.com/en-us/fluentui#/controls/web/button"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </p>

      <DemoBox>
        <Stack horizontal tokens={stackTokens}>
          <PrimaryButton text="Microsoft Fluent Button" />
        </Stack>
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
              href="https://github.com/microsoft/fluentui/blob/dab45a2afe609709735b9b6e604a1af40d50e809/packages/utilities/src/initializeFocusRects.ts"
              target="_blank"
              rel="noreferrer"
            >
              this functionality
            </a>{" "}
            they attach <span className="actionTarget">event-listeners</span>{" "}
            for <span className="actionTarget">mousedown</span> +{" "}
            <span className="actionTarget">pointerdown</span> +{" "}
            <span className="actionTarget">keydown</span>
            and based on those event they, quote on quote
          </p>
          <div className="quoteBlock">
            <ol>
              <li>
                <p>
                  Subscribes keydown and mousedown events. (It will only do it
                  once per window, so it's safe to call this method multiple
                  times.)
                </p>
              </li>
              <li>
                <p>
                  When the user presses directional keyboard keys, adds the
                  'ms-Fabric--isFocusVisible' classname to the document body,
                  removes the 'ms-Fabric-isFocusHidden' classname.
                </p>
              </li>
              <li>
                <p>
                  When the user clicks a mouse button, adds the
                  'ms-Fabric-isFocusHidden' classname to the document body,
                  removes the 'ms-Fabric--isFocusVisible' classname.
                </p>
              </li>
            </ol>
          </div>
          <h3>Critical points</h3>
          <div>
            <ul>
              <li>
                We would have to base all our styling on the existence of the
                <span className="actionTarget">body className</span> that is
                <span className="action">handled via javascript</span> (direct
                DOM manibulation - brittle by design when working with react)
              </li>
              <li>
                css pseudo-selector <span className="actionTarget">:focus</span>{" "}
                would be unusable (<span className="action">major rewrite</span>{" "}
                of existing css styling logic, possible edge-cases)
              </li>
              <li>
                future-to-be-usable native css pseudo-selector <span className="actionTarget">:focus-visible</span>{" "}
                would be conflicting and inconsistent (creating <span className="action">tech-debt</span>)
              </li>
              <li>
                <span className="action">additional complexity</span> to be
                handled "manually" (not browser-native solution), creating
                <span className="action">additional "fail-point"</span>,{" "}
                <span className="action">additional testing</span>,
                <span className="action">additional maintenance</span>
              </li>
              <li>
                this solution has known
                <span className="action">compatibility issues</span> with
                <span className="actionTarget">third-party libraries</span>, it
                would <span className="action">restrict our flexibility</span>{" "}
                and require a <span className="action">full analysis</span>{" "}
                existing third-party libraries compatibility
              </li>
              <li>
                <span className="actionTarget">
                  iframe based micro-frontend
                </span>{" "}
                will most likely break (see related issue)
              </li>
            </ul>
          </div>
          <h3>Known issues</h3>
          <ul>
            <li>
              <a
                href="https://github.com/microsoft/fluentui/issues/17201"
                target="_blank"
                rel="noreferrer"
              >
                Issue with iframes due
              </a>
            </li>
            <li>
              <a
                href="https://github.com/microsoft/fluentui/issues/22622"
                target="_blank"
                rel="noreferrer"
              >
                Third party library compatibility issues due to unusable native
                :focus-visible
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
