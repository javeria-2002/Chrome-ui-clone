import React from 'react';
import './NewTabContent.css';

const shortcuts = [
  { label: 'Creep5', iconUrl: 'https://www.google.com/s2/favicons?sz=64&domain=creepjs.com', color: '#ea4335' },
  { label: 'v0', iconUrl: 'https://www.google.com/s2/favicons?sz=64&domain=v0.dev', color: '#9c27b0' },
  { label: 'Techlife', iconUrl: 'https://www.google.com/s2/favicons?sz=64&domain=techlife.com', color: '#607d8b' },
  { label: 'Web Store', iconUrl: 'https://www.google.com/s2/favicons?sz=64&domain=chrome.google.com', color: '#ff9800' },
  { label: 'Add shortcut', iconUrl: '', isAddShortcut: true, color: '#ffc107' }
];

function NewTabContent() {
  return (
    <div className="new-tab-content">
      <div className="google-logo">Google</div>

      <div className="search-container">
        <div className="search-bar">
          <div className="search-icon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <input type="text" placeholder="Search Google or type a URL" />
          <div className="search-actions">
            <div className="voice-search">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#9aa0a6" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V21h2v-2.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
              </svg>
            </div>
            <div className="google-lens">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#9aa0a6" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="ai-mode">
              <span>AI Mode</span>
            </div>
          </div>
        </div>
      </div>

      <div className="shortcut-grid">
        {shortcuts.map((item, index) => (
          <div className="shortcut-item" key={index}>
            <div className={`shortcut-icon ${item.isAddShortcut ? 'add' : ''}`} style={{ backgroundColor: item.color }}>
              {item.isAddShortcut ? (
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#000" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              ) : (
                <img src={item.iconUrl} alt={item.label} />
              )}
            </div>
            <div className="shortcut-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="customize-button">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path fill="#5f6368" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
        <span>Customize Chrome</span>
      </div>
    </div>
  );
}

export default NewTabContent;
