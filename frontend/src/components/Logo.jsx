import React from 'react';

const Logo = ({ className = "h-12 w-12" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* TechKila cloud logo with transparent background */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/xil1okbp_techkila.jpeg" 
        alt="TechKila Logo" 
        className="w-full h-full object-contain"
        style={{
          mixBlendMode: 'multiply',
          filter: 'brightness(1.1) contrast(1.1)',
        }}
      />
    </div>
  );
};

export default Logo;
