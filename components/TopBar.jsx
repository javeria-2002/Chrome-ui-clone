import React from 'react';
import AddressBar from './AddressBar';
import './TopBar.css';

function TopBar() {
  return (
    <div className="chrome-top-bar">
      <div className="chrome-toolbar-row">
        <div className="navigation-buttons">
          <button className="nav-btn back-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#5f6368" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <button className="nav-btn forward-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#5f6368" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
          <button className="nav-btn reload-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#5f6368" d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
          </button>
        </div>
        <AddressBar />
        <div className="toolbar-actions">
          <button className="toolbar-btn bookmark-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#5f6368" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
          <button className="toolbar-btn profile-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#5f6368" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </button>
          <button className="toolbar-btn menu-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#5f6368" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="chrome-links-row">
        <div className="google-links">
          <a href="#" className="google-link">Gmail</a>
          <a href="#" className="google-link">Images</a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
