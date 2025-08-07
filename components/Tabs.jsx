import React, { useState } from 'react';
import './Tabs.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabClick = (index) => {
    if (index === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveTab(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === 0 ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          <div className="tab-icon">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="#5f6368" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span className="tab-title">New Tab</span>
          <button className="tab-close">×</button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
