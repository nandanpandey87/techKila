import React from 'react';

const Logo = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* TechKila full logo with tagline - completely transparent background */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/iq18guse_IMG_3026.PNG" 
        alt="TechKila - If its Tech, its Techkila" 
        className="h-full w-auto object-contain"
        style={{
          mixBlendMode: 'darken',
          filter: 'brightness(0.98) contrast(1.1) saturate(1.05)',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};

export default Logo;
