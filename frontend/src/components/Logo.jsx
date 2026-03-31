import React from 'react';

const Logo = ({ className = "h-24 w-auto" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* TechKila full logo - enhanced mobile transparency */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/iq18guse_IMG_3026.PNG" 
        alt="TechKila - If its Tech, its Techkila" 
        className="h-full w-auto object-contain"
        style={{
          mixBlendMode: 'multiply',
          filter: 'brightness(1.35) contrast(1.25) saturate(1.15)',
          WebkitFilter: 'brightness(1.35) contrast(1.25) saturate(1.15)',
          imageRendering: '-webkit-optimize-contrast',
          backfaceVisibility: 'hidden',
        }}
      />
    </div>
  );
};

export default Logo;
