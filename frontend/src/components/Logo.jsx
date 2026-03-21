import React from 'react';

const Logo = ({ className = "h-12 w-12" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Using the cloud portion of the logo */}
      <img 
        src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/i0em21qy_techkila.jpeg" 
        alt="TechKila Logo" 
        className="w-full h-full object-cover object-top opacity-90"
        style={{
          clipPath: 'inset(0% 0% 58% 0%)', // Crops to show only the cloud icon part
        }}
      />
    </div>
  );
};

export default Logo;
