import React from "react";

const GifDisplay = ({ gif }) => {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      {gif ? (
        <img src={gif} alt="Skill GIF" className="rounded-lg max-h-80 object-contain" />
      ) : (
        <p className="text-gray-500">Select a card to view skill animation</p>
      )}
    </div>
  );
};

export default GifDisplay;

