import React from 'react';

const Logo = ({ className = "h-12 w-12" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* TechKila cloud logo with transparent background */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/v6an3yli_WhatsApp%20Image%202026-03-21%20at%208.40.25%20PM.jpeg" 
        alt="TechKila Logo" 
        className="w-full h-full object-contain"
        style={{
          mixBlendMode: 'darken',
          filter: 'brightness(0.95) contrast(1.2) saturate(1.1)',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};

export default Logo;
