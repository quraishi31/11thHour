import React from "react";

type LogoProps = {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({
  src = "https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pxaqvwDL2t4GN5U9I3TASyb7soBlnvORc0gpX", // <-- replace this
  alt = "Company Logo",
  width = 160,
  height = "auto",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={typeof width === "number" ? width : undefined}
      height={typeof height === "number" ? height : undefined}
      style={{
        width: typeof width === "string" ? width : undefined,
        height: typeof height === "string" ? height : undefined,
        objectFit: "contain",
        display: "block",
      }}
      className={className}
      loading="lazy"
    />
  );
};

export default Logo;
