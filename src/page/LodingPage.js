import React from 'react';
import '../css/loading';
import '../css/custom';
import '../css/steller.css';

export default function LodingPage() {
  return (
    <div className="custom_center">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-text">loading</div>
      </div>
    </div>
  );
}
