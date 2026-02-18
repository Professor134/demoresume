import React from "react";
import { useRive } from "@rive-app/react-canvas";

const Rive = () => {
  const { RiveComponent } = useRive({
    src: "/logol.riv",  // path inside public/
    autoplay: true, // auto plays the default animation
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <RiveComponent style={{ width: 300, height: 400 }} />
    </div>
  );
};

export default Rive;
