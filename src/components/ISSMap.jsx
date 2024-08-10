import React from 'react';

const ISSMap = ({ latitude, longitude }) => {
  // Convert lat/long to x/y coordinates
  const x = (longitude + 180) * (800 / 360);
  const y = (90 - latitude) * (400 / 180);

  return (
    <div className="w-full h-[400px] md:h-[600px] bg-gray-100 flex items-center justify-center">
      <svg width="800" height="400" viewBox="0 0 800 400" className="max-w-full max-h-full">
        {/* Ocean */}
        <rect x="0" y="0" width="800" height="400" fill="#A8D5FF" />
        
        {/* Continents */}
        <path d="M120,46L140,52L160,50L180,48L200,50L220,54L240,58L260,62L280,66L300,70L320,74L340,78L360,82L380,86L400,90L420,94L440,98L460,102L480,106L500,110L520,114L540,118L560,122L580,126L600,130L620,134L640,138L660,142L680,146L700,150L720,154L740,158L760,162L780,166L780,400L20,400L20,50L40,48L60,46L80,44L100,42L120,46Z" fill="#C8E6C9" />
        <path d="M20,50L40,48L60,46L80,44L100,42L120,46L140,52L160,50L180,48L200,50L220,54L240,58L260,62L280,66L300,70L320,74L340,78L360,82L380,86L400,90L420,94L440,98L460,102L480,106L500,110L520,114L540,118L560,122L580,126L600,130L620,134L640,138L660,142L680,146L700,150L720,154L740,158L760,162L780,166" fill="none" stroke="#4CAF50" strokeWidth="2" />
        
        {/* Grid lines */}
        <path d="M0,200 L800,200 M400,0 L400,400" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
        
        {/* ISS Location */}
        <circle cx={x} cy={y} r="6" fill="red" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ISSMap;