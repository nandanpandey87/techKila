import React from 'react';

const Logo = ({ className = "h-16 w-auto" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* TechKila full logo - optimized for all devices */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/iq18guse_IMG_3026.PNG" 
        alt="TechKila - If its Tech, its Techkila" 
        className="h-full w-auto object-contain"
        style={{
          mixBlendMode: 'multiply',
          filter: 'brightness(1.2) contrast(1.15) saturate(1.05)',
          WebkitFilter: 'brightness(1.2) contrast(1.15) saturate(1.05)',
        }}
      />
    </div>
  );
};

export default Logo;
