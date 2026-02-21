import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Diamond Half */}
      <path 
        d="M50 10L90 48H10L50 10Z" 
        fill="#002266" 
      />
      {/* Bottom Diamond Half */}
      <path 
        d="M10 52H90L50 90L10 52Z" 
        fill="#00C853" 
      />
      
      {/* Stripes on bottom half */}
      <defs>
        <pattern id="stripes" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#000" strokeWidth="1" opacity="0.1" />
        </pattern>
      </defs>
      <path d="M10 52H90L50 90L10 52Z" fill="url(#stripes)" />

      {/* Center Circle - Split */}
      <mask id="circle-mask">
        <circle cx="50" cy="50" r="15" fill="white" />
      </mask>
      <g mask="url(#circle-mask)">
        <rect x="35" y="35" width="30" height="15" fill="#00C853" />
        <rect x="35" y="50" width="30" height="15" fill="#002266" />
      </g>
      {/* Optional: Inner white diamond for spacing if needed, but the image shows it touching */}
    </svg>
  );
};

export default Logo;
