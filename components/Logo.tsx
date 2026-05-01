import React from 'react';

interface EncoreLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function EncoreLogo({ 
  className = '', 
  width = '100%', 
  height = 'auto' 
}: EncoreLogoProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 740 200"
        width={width}
        height={height}
        className="w-full max-w-4xl"
      >
        <defs>
          {/* Blue gradient for the 'O' symbol and arrow */}
          <linearGradient id="encoreBlue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C0F3" />
            <stop offset="100%" stopColor="#0072CE" />
          </linearGradient>
        </defs>

        {/* TEXT PATHS (E N C R E)
          Using thick strokes with round caps/joins to perfectly mimic the geometric rounded font style.
        */}
        <g
          stroke="#E2E4E5"
          fill="none"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Letter E */}
          <path d="M 100 50 L 50 50 L 50 150 L 100 150 M 50 100 L 90 100" />
          
          {/* Letter N */}
          <path d="M 150 150 L 150 50 L 210 150 L 210 50" />
          
          {/* Letter C (An arc starting from top-right, going left, and ending at bottom-right) */}
          <path d="M 330 65 A 40 40 0 1 0 330 135" />
          
          {/* Letter R */}
          <path d="M 530 150 L 530 50 L 560 50 A 25 25 0 0 1 560 100 L 530 100 M 545 100 Q 575 100, 585 150" />
          
          {/* Letter E */}
          <path d="M 680 50 L 630 50 L 630 150 L 680 150 M 630 100 L 670 100" />
        </g>

        {/* SYMBOL 'O'
          Includes the blue circle, the white sweeping trail, and the blue paper-plane arrow.
        */}
        <g>
          {/* Base Blue Circle */}
          <circle cx="430" cy="100" r="60" fill="url(#encoreBlue)" />
          
          {/* White Swoosh / Trail crossing the circle */}
          <path 
            d="M 368 115 C 400 145, 450 120, 482 45 C 435 65, 390 100, 368 115 Z" 
            fill="#FFFFFF" 
          />
          
          {/* Blue Paper-Plane / Arrowhead */}
          <path 
            d="M 505 10 L 515 45 L 490 38 L 475 25 Z" 
            fill="url(#encoreBlue)" 
          />
        </g>
      </svg>
    </div>
  );
}
