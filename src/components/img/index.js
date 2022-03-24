import Image from "next/image";
import React from "react";

function Img({ src, alt, width, maxWidth, height }) {
  return (
    <div style={{ width: width, maxWidth: maxWidth, height: height }}>
      <Image src={src} alt={alt} width="100%" height="100%" />
    </div>
  );
}

export default Img;
