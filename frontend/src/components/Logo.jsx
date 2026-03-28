import React from 'react';

const Logo = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* TechKila full logo - white background completely removed */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/iq18guse_IMG_3026.PNG" 
        alt="TechKila - If its Tech, its Techkila" 
        className="h-full w-auto object-contain"
        style={{
          mixBlendMode: 'multiply',
          filter: 'brightness(1.15) contrast(1.2)',
          opacity: 0.95,
        }}
      />
    </div>
  );
};

export default Logo;
