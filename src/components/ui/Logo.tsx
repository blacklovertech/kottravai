import React from 'react';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/assets/images/logo.png" // Direct path from /public
        alt="Kottravai"
        className="h-10 object-contain"
      />
      <div
        className={`font-bold text-xl ${
          light ? 'text-white' : 'text-gray-800'
        }`}
      >
        <span
          className={`text-sm block font-normal ${
            light ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          E-Commerce
        </span>
      </div>
    </div>
  );
};

export default Logo;
