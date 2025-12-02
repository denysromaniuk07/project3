import React from 'react';

/**
 * ProgressBar.jsx
 * Utility component for progress visualization
 */
const ProgressBar = ({ value = 0, gradient = "from-indigo-500 to-purple-500" }) => (
  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
    <div className={`h-full rounded-full bg-gradient-to-r ${gradient} shadow-sm`} style={{ width: `${value}%` }} />
  </div>
);

export default ProgressBar;