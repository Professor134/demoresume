import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 45 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
};

export default Typewriter;
