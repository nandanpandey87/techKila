import React from 'react';

const Logo = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* TechKila full logo with tagline - transparent background */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/iq18guse_IMG_3026.PNG" 
        alt="TechKila - If its Tech, its Techkila" 
        className="h-full w-auto object-contain"
        style={{
          mixBlendMode: 'multiply',
          filter: 'brightness(1) contrast(1.05)',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};

export default Logo;
