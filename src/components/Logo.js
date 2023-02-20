import React from "react";

const Logo = () => {
  return (
    <>
      <picture>
        <source srcset="/Logo.png" />
        <img src="/Logo.png" alt="Logo" className="max-w-full h-12" />
      </picture>
    </>
  );
};

export default Logo;
