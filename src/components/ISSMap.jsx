import React from 'react';

const ISSMap = ({ latitude, longitude }) => {
  // Convert lat/long to x/y coordinates
  const x = (longitude + 180) * (800 / 360);
  const y = (90 - latitude) * (400 / 180);

  return (
    <div className="w-full h-[400px] md:h-[600px] bg-gray-100 flex items-center justify-center">
      <svg width="800" height="400" viewBox="0 0 800 400" className="max-w-full max-h-full">
        <rect x="0" y="0" width="800" height="400" fill="#E6F3FF" />
        <path d="M122,58L239,41L336,53L398,77L431,86L493,121L546,108L583,113L615,134L671,151L708,158L724,170L769,176L787,195L788,219L744,232L710,234L685,240L678,252L627,259L606,268L592,291L559,299L531,315L506,314L484,321L464,321L449,329L426,325L416,337L412,358L419,371L426,382L422,392L404,388L372,385L354,385L350,379L345,375L341,371L324,375L304,375L292,371L272,371L251,371L239,367L233,363L228,358L222,354L215,354L210,350L204,350L199,346L194,346L188,342L183,342L177,338L172,338L166,334L161,334L155,330L150,330L144,326L139,326L133,322L128,322L122,318L117,318L111,314L106,314L100,310L95,310L89,306L84,306L78,302L73,302L67,298L62,298L56,294L51,294L45,290L40,290L34,286L29,286L23,282L18,282L12,278L7,278L1,274" fill="none" stroke="#CCCCCC" strokeWidth="1" />
        <circle cx={x} cy={y} r="5" fill="red" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ISSMap;