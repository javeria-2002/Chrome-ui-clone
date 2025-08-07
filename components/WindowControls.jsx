import React from 'react';
import './WindowControls.css';

function WindowControls() {
  return (
    <div className="window-controls">
      <button className="control-btn minimize">
        <svg viewBox="0 0 12 12" width="12" height="12">
          <rect x="2" y="5" width="8" height="2" fill="#000"/>
        </svg>
      </button>
      <button className="control-btn maximize">
        <svg viewBox="0 0 12 12" width="12" height="12">
          <rect x="2" y="2" width="8" height="8" fill="none" stroke="#000" strokeWidth="1"/>
        </svg>
      </button>
      <button className="control-btn close">
        <svg viewBox="0 0 12 12" width="12" height="12">
          <path d="M2 2l8 8M10 2l-8 8" stroke="#000" strokeWidth="1" fill="none"/>
        </svg>
      </button>
    </div>
  );
}

export default WindowControls;
