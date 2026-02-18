import React from "react";

const IconLink = ({ href, icon: Icon, text }) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
      <span>{text}</span>
    </a>
  );
};

export default IconLink;
