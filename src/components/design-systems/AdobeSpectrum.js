import React from 'react';
import { Button, defaultTheme, Provider } from '@adobe/react-spectrum';
import { DemoBox } from './helpers/DemoBox';

export const AdobeSpectrum = () => (
  <Provider theme={defaultTheme}>
    <div className="contentWrapper">
      <div>
        <h2>Adobe - Spectrum (react flavour)</h2>
        <p>
          <a
            href="https://react-spectrum.adobe.com/react-spectrum/Button.html"
            target="_blank" rel="noreferrer"
          >
            Docs
          </a>
        </p>
        <DemoBox>
          <Button variant="cta">Spectrum Button</Button>
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
            Components are wrapped in a{' '}
            <a
              href="https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/focus/src/FocusRing.tsx"
              target="_blank" rel="noreferrer"
            >
              component
            </a>{' '}
            that listen to <span className="actionTarget">"focusWithIn"</span>{' '}
            event and based on the{' '}
            <a
              href="https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/interactions/src/useFocusWithin.ts"
              target="_blank" rel="noreferrer"
            >
              focusWithIn callback
            </a>{' '}
            <span className="action">they apply a className</span>
          </div>
          <div>
            under the hood <span className="actionTarget">FocusRing</span> and{' '}
            <span className="actionTarget">Button</span>
            <span className="action"> are creating a </span>
            <span className="actionTarget">context provider</span>
            <span className="action">for every single button</span>
          </div>
          <h3>Critical points</h3>
          <div>
            Going with the above solution would imply some{' '}
            <span className="action">trades-off</span> and would open ourself to
            some <span className="action">edge-cases</span>
            <ul>
              <li>
                We would have to base all our styling on additional
                <span className="actionTarget">className/states</span> that are{' '}
                <span className="action">handled via javascript</span> (heavy
                DOM manipulation - possible performance hit)
              </li>
              <li>
                css pseudo-selector <span className="actionTarget">:focus</span>{' '}
                would be unusable (<span className="action">major rewrite</span>{' '}
                of existing css styling logic, possible edge-cases)
              </li>
              <li>
                <span className="action">additional complexity</span> to be
                handled "manually" (not browser-native solution), creating
                <span className="action">additional "fail-point"</span>,{' '}
                <span className="action">additional testing</span>,
                <span className="action">additional maintenance</span>
              </li>
              <li>
                to avoid common callback requirements/functionalities as{' '}
                <span className="actionTarget">
                  .preventDefault()/.stopPropagation()
                </span>{' '}
                breaking the implementation, the{' '}
                <span className="actionTarget">
                  function flow must be{' '}
                  <a
                    href="https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/interactions/src/useFocus.ts#L33"
                    target="_blank" rel="noreferrer"
                  >
                    intercepted and derived
                  </a>
                </span>
                , this <b>should</b> be transparent to final user on paper
                (based on known issues, it's not always so transparent) but{' '}
                <span className="action">huge effort</span> is required on the
                dev side of the library to support the pattern consistently and{' '}
                <span className="action">
                  unforesable consequences may apply
                </span>{' '}
                <span className="action">especially performance hits</span>
              </li>
            </ul>
          </div>
          <h3>There are known issues regarding this in spectrum itself</h3>
          <ul>
            <li>
              <a
                href="https://github.com/adobe/react-spectrum/issues/1247"
                target="_blank" rel="noreferrer"
              >
                {' '}
                known issue in spectrum{' '}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adobe/react-spectrum/issues/1050"
                target="_blank" rel="noreferrer"
              >
                {' '}
                known issue in spectrum 2{' '}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adobe/react-spectrum/issues/1024"
                target="_blank" rel="noreferrer"
              >
                {' '}
                known issue in spectrum 3{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Provider>
);
