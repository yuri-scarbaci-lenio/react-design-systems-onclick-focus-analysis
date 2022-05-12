import React from "react";

export const Conclusions = () => (
  <div>
    <h2>Technical Engineering team conclusions:</h2>
    <p>
      Technical implementation of the pattern would require a <span className="action">MAJOR effort</span> on
      the <span className="action">DEV</span> team which is <span className="action">currently already focusing</span> on supporting other more
      <span className="action">priority items like WCAG 2.1 AA compliance</span> and better documentation,
      better organization and less wastfull components etc...
    </p>
    <p>
      Trying to implement the functionality while browser are not yet supporting{' '}
      <span className="actionTarget">:focus-visible</span> would open dimsum library to becoming <span className="action">fragile</span>, especially
      when taking in consideration the iframe based micro-frontend structure in
      which dimsum is being used nowadays
    </p>
    <p>
      Investing time in this effort as of <span className="action">12 May 2022</span> would mean we will be
      creating <span className="action">tech-debt</span> since what we are going to implement now will most
      likely be not compatible with the <span className="action">soon-to-be</span><span className="actionTarget"> native :focus-visible css
      pseudo-selector</span>
    </p>
  </div>
);
