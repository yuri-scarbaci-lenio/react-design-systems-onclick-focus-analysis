import React from 'react';

export const CurrentFocusDisplayer = () => {
  const [__html, setHtml] = React.useState(document.activeElement.outerHTML);
  React.useEffect(() => {
    function handleNewFocus(event) {
      const { target } = event;
      setHtml(target.outerHTML);
    }
    document.addEventListener('focusin', handleNewFocus);
    return () => {
      document.removeEventListener('focusin', handleNewFocus);
    };
  }, []);
  if (__html)
    return (
      <div className="focusedElementPreviewWrapper">
        <h3>Currently focused element pseudo-preview:</h3>
        <div className="focusedElementWrapper">
          <div
            className="focusedElementPreview"
            dangerouslySetInnerHTML={{ __html }}
          />
        </div>
      </div>
    );
  return null;
};
