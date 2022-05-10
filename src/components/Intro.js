import React from 'react';
import { CanIUseVisibleFocus } from './imgs/CanIUseVisibleFocus';

export const Intro = () => (
  <div>
    <h2>What are we talking about</h2>
    <br />
    <div>
      Some libraries, operative systems and browsers have an "opinion" about
      wheter or not <span className="action">clicking</span> an{' '}
      <span className="actionTarget">interactive element</span> such a button
      should imply a focus of the element or not
    </div>
    <hr />
    <p>
      We already analysed the way to accomplish this technically and the
      trades-off implied when choosing to force the pattern
    </p>
    <p>
      Our <span className="actionTarget">Technical findings</span> are that{' '}
      <span className="actionTarget">modern-browsers</span> are{' '}
      <span className="action">starting to support</span> a css selector{' '}
      <a
        href="https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo"
        target="_blank"
        className="actionTarget"
      >
        :focus-visible
      </a>{' '}
      but <span className="action">support is sparse and "buggy"</span> as of
      today (09 May 2022)
    </p>
    <CanIUseVisibleFocus />
    <hr />
    <p>
      There is an available polyfill for implementing the "pseudo-selector" that
      can be found at{' '}
      <a href="https://github.com/WICG/focus-visible" target="_blank">
        this github repo
      </a>{' '}
      but as per the polyfill documentation itself:
    </p>
    <div className="quoteBlock">
      <p>How it works </p>
      <p>
        The script uses two heuristics to determine whether the keyboard is
        being (or will be) used:
      </p>
      <p>
        a focus event immediately following a keydown event where the key
        pressed was either Tab, Shift + Tab, or an arrow key.
      </p>
      <p>
        focus moves into an element which requires keyboard interaction, such as
        a text field
      </p>
      <p>
        NOTE: this means that HTML elements like
        {` <input type={text|email|password|...}>`} or {`<textarea>`} will
        always match the :focus-visible selector, regardless of whether they are
        focused via a keyboard or a mouse.
      </p>
      <p>
        TODO: ideally, we also trigger keyboard modality following a keyboard
        event which activates an element or causes a mutation; this still needs
        to be implemented.
      </p>
    </div>
    <p>
      the{' '}
      <span className="action">
        implementation is incomplete and experimental
      </span>
      , plus it's an <span className="actionTarget">heuristic script</span> that
      tries to <span className="action">intercept user events</span>, which will
      mean any change to the way the event are handled (such as{' '}
      <span className="actionTarget">
        preventing propagation or preventing default
      </span>{' '}
      ) <span className="action">would result in unexpected edge-cases</span>{' '}
      and in pages with lot of content{' '}
      <span className="action">may result in a performance hit</span>.
    </p>
    <p>
      Not using the pseudo-class solution or it's polyfill (or any
      out-of-the-box solution) would mean having to{' '}
      <span className="action">manually handle</span> the functionality, which
      means we are going to end up doing{' '}
      <span className="action">heavy dom-manipulation</span> and we are going to
      create <span className="action">more fail-points</span>,{' '}
      <span className="action">more load</span> on the loading time,{' '}
      <span className="action">less reactive interaction-times</span>{' '}
      (especially in complex component like shuttle/data-table/treeview), etc...
    </p>
  </div>
);
