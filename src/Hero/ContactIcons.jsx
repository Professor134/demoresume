import React from "react";
import { FaPhoneAlt ,FaEnvelope ,FaLinkedin ,FaPinterestP ,FaDownload} from "react-icons/fa";

const ContactIcons = () => {
  return (
    <div className="pt-56 bg-transparent backdrop-blur-md rounded-xl p-5 shadow-lg w-14 flex flex-col items-center space-y-4">

      {/* Phone */}
      <a
        href="tel:+919876543210"
        className="text-xl hover:text-blue-600"
        title="Phone"
      >
        <FaPhoneAlt className="text-xl"/> 
      </a>

      {/* Email */}
      <a
        href="mailto:example@email.com"
        className="text-xl hover:text-blue-600"
        title="Email"
      >
        <FaEnvelope className="text-xl"/> 
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-blue-600"
        title="LinkedIn"
      >
        <FaLinkedin className="text-xl"/> 
      </a>

      {/* Pinterest */}
      <a
        href="https://www.pinterest.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-blue-600"
        title="Pinterest"
      >
        <FaPinterestP className="text-xl"/>
      </a>

      {/* Resume Download */}
      <a
        href="/resume.pdf" // Ensure this file is in your `public` folder
        download
        className="text-xl hover:text-green-600"
        title="Download Resume"
      >
        <FaDownload className="text-xl"/>
      </a>
    </div>
  );
};

export default ContactIcons;
