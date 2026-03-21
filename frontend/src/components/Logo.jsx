import React from 'react';

const Logo = ({ className = "h-12 w-12" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* TechKila cloud logo with transparent background */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/v6an3yli_WhatsApp%20Image%202026-03-21%20at%208.40.25%20PM.jpeg" 
        alt="TechKila Logo" 
        className="w-full h-full object-contain drop-shadow-lg"
        style={{
          mixBlendMode: 'multiply',
          filter: 'brightness(1.05) contrast(1.15)',
        }}
      />
    </div>
  );
};

export default Logo;
