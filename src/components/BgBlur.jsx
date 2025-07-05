import React, { useEffect, useState } from 'react';

const getRandom = (min, max) => Math.random() * (max - min) + min;


const generateSpacedBlobs = (totalBlobs, pageHeight) => {
  const spacing = 2*(pageHeight / totalBlobs );
  return Array.from({ length: totalBlobs }).map((_, i) => {
    const size = getRandom(20, 40); // % of viewport width
    const top = getRandom(i * spacing, (i + 1) * spacing - size * 4); // VH pixel
    const left = getRandom(0,55); // spread nicely
    const delay = getRandom(0, 4000);

    return {
      key: i,
      size: `${size}vw`,
      top: `${(top / window.innerHeight) * 100}vh`,
      left: `${left}vw`,
      delay,
    };
  });
};

const BgBlur = ({ baseCount = 4 }) => {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
  const maxPageHeight = window.innerHeight * 3; // assume max 3 screenfuls
  const estimatedCount = Math.ceil(maxPageHeight / 800) * baseCount;
  setBlobs(generateSpacedBlobs(estimatedCount, maxPageHeight));
}, [baseCount]);


  return (
    <div className="absolute  inset-0 z-0 pointer-events-none">
      {blobs.map(({ key, size, top, left, delay }) => (
        <div
          key={key}
          className="absolute rounded-full animate-float bg-blur-gradient-l dark:bg-blur-gradient-d"
          style={{
            width: size,
            height: size,
            top,
            left,
            animationDelay: `${delay}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default BgBlur;
