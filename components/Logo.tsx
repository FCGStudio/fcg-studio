
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-yellow-400"
      >
        {/* Outer Ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="46" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        
        {/* Three Vertical Eyes */}
        <ellipse cx="32" cy="36" rx="6" ry="14" fill="currentColor" />
        <ellipse cx="50" cy="28" rx="6" ry="14" fill="currentColor" />
        <ellipse cx="68" cy="36" rx="6" ry="14" fill="currentColor" />
        
        {/* Main Smile Path */}
        <path 
          d="M20 52 C 20 85, 76 85, 76 52" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Cheek Ticks */}
        <path d="M16 52 H 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M72 52 H 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        
        {/* The Tongue */}
        <path 
          d="M66 73 C 68 85, 85 82, 82 68 C 82 64, 78 63, 75 64" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Logo;
