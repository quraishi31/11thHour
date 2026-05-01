import React from "react";

interface EncoreLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const EncoreLogo: React.FC<EncoreLogoProps> = ({
  width = 400,
  height = 120,
  className = "",
}) => {
  const aspectRatio = 400 / 120;
  const computedHeight = width / aspectRatio;

  return (
    <svg
      width={width}
      height={computedHeight}
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Encore Logo"
    >
      <defs>
        {/* Globe gradient - light blue center to deeper blue */}
        <radialGradient id="globeGradient" cx="45%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#7EDBF7" />
          <stop offset="40%" stopColor="#29B8E8" />
          <stop offset="100%" stopColor="#0A7DC2" />
        </radialGradient>

        {/* Arrow tip gradient */}
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4FD1F5" />
          <stop offset="100%" stopColor="#1aaad4" />
        </linearGradient>

        {/* Clip path for globe circle */}
        <clipPath id="globeClip">
          <circle cx="198" cy="58" r="46" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="400" height="120" fill="#4a4a52" rx="4" />

      {/* ── TEXT: EN ── */}
      <text
        x="14"
        y="92"
        fontFamily="'Arial Black', 'Arial Bold', sans-serif"
        fontWeight="900"
        fontSize="85"
        fill="#D8D8DC"
        letterSpacing="-2"
      >
        EN
      </text>

      {/* ── GLOBE (replaces the "C") ── */}
      {/* Globe circle */}
      <circle cx="198" cy="58" r="46" fill="url(#globeGradient)" />

      {/* Orbital ring arc (dark band around the globe) */}
      <ellipse
        cx="198"
        cy="58"
        rx="52"
        ry="20"
        fill="none"
        stroke="#2a2a30"
        strokeWidth="7"
        transform="rotate(-30, 198, 58)"
        clipPath="url(#globeClip)"
      />

      {/* Second arc stroke for depth */}
      <ellipse
        cx="198"
        cy="58"
        rx="52"
        ry="20"
        fill="none"
        stroke="#1e3a4a"
        strokeWidth="3"
        transform="rotate(-30, 198, 58)"
      />

      {/* Arrow / cursor on top of globe */}
      {/* Arrow body pointing up-right */}
      <polygon
        points="198,14  212,30  203,27  200,38  196,27  188,30"
        fill="url(#arrowGradient)"
      />

      {/* ── TEXT: RE ── */}
      <text
        x="242"
        y="92"
        fontFamily="'Arial Black', 'Arial Bold', sans-serif"
        fontWeight="900"
        fontSize="85"
        fill="#D8D8DC"
        letterSpacing="-2"
      >
        RE
      </text>
    </svg>
  );
};

export default EncoreLogo;

// ── Usage Example ──
// import EncoreLogo from "./EncoreLogo";
//
// function App() {
//   return (
//     <div>
//       <EncoreLogo width={400} />          {/* default size */}
//       <EncoreLogo width={200} />          {/* smaller */}
//       <EncoreLogo width={600} />          {/* larger  */}
//       <EncoreLogo width={400} className="my-logo" />
//     </div>
//   );
// }
