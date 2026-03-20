"use client";

import { useState } from "react";

interface Props {
  images: string[];
}

const ImagenCard = ({ images }: Props) => {
  const [estado, setEstado] = useState(0);

  const anterior = () => {
    setEstado((e) => (e === 0 ? images.length - 1 : e - 1));
  };

  const siguiente = () => {
    setEstado((e) => (e === images.length - 1 ? 0 : e + 1));
  };

  return (
    <div >
      {images.length > 1 && (
        <button className="flechaI" onClick={anterior}>‹</button>
      )}

      <img src={images[estado]} className="mainImage" />

      {images.length > 1 && (
        <button className="flechaD" onClick={siguiente}>›</button>
      )}
    </div>
  );
};

export default ImagenCard;