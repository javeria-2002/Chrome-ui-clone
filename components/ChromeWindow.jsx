import React from 'react';
import WindowControls from './WindowControls';
import TopBar from './TopBar';
import NewTabContent from './NewTabContent';
import './ChromeWindow.css';

function ChromeWindow() {
  return (
    <div className="chrome-browser">
      <div className="chrome-header">
        <div className="window-controls-container">
          <div className="top-tab">
            <div className="tab-icon">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="#5f6368" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className="tab-title">New Tab</span>
            <div className="new-tab-button">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="#5f6368" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </div>
          </div>
          <WindowControls />
        </div>
        <TopBar />
      </div>
      <div className="tab-content">
        <NewTabContent />
      </div>
    </div>
  );
}

export default ChromeWindow;
