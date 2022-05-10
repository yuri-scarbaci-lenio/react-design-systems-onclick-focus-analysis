import React from 'react';
import { CurrentFocusDisplayer } from './CurrentFocusDisplayer';

export const DemoBox = ({ children }) => {
  return (
    <div className="demoBox">
      <div className="componentContainer">{children}</div>
      <div className="resetFocusZone" tabIndex={0}>
        reset focus
      </div>
      <CurrentFocusDisplayer />
    </div>
  );
};
