import React from 'react';
import './AddressBar.css';

function AddressBar() {
  return (
    <div className="address-bar">
      <div className="address-bar-left">
        <div className="lock-icon">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="#5f6368" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
          </svg>
        </div>
        <input type="text" placeholder="Search Google or type a URL" />
      </div>
    </div>
  );
}

export default AddressBar;
