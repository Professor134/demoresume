import React, { useEffect, useState } from 'react';

const getRandom = (min, max) => Math.random() * (max - min) + min;

const generateSpacedBlobs = (totalBlobs, pageHeight, isMobile) => {
  const spacing = 2 * (pageHeight / totalBlobs);

  return Array.from({ length: totalBlobs }).map((_, i) => {
    const size = getRandom(isMobile ? 18 : 22, isMobile ? 32 : 42);
    const top = getRandom(i * spacing, (i + 1) * spacing - size * 4);
    const left = getRandom(0, isMobile ? 70 : 60);
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
    const isMobile = window.innerWidth < 768;
    const maxPageHeight = window.innerHeight * (isMobile ? 2 : 2.8);
    const estimatedCount = Math.ceil(maxPageHeight / 800) * baseCount;

    setBlobs(generateSpacedBlobs(estimatedCount, maxPageHeight, isMobile));
  }, [baseCount]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {blobs.map(({ key, size, top, left, delay }) => (
        <div
          key={key}
          className="
            absolute 
            rounded-full 
            animate-float 
            blur-3xl 
            opacity-40 
            bg-green-400/40 
            dark:bg-purple-600/40
          "
          style={{
            width: size,
            height: size,
            top,
            left,
            animationDelay: `${delay}ms`,
            maxWidth: '45vw',
            maxHeight: '45vw',
          }}
        />
      ))}
    </div>
  );
};

export default BgBlur;