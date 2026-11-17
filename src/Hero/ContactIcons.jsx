import React from "react";
import { 
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaPinterestP,
  FaDownload
} from "react-icons/fa";

const ContactIcons = () => {
  return (
    <div className="
      fixed left-6 top-1/2 -translate-y-1/2
      flex flex-col items-center space-y-4
      p-4 rounded-3xl
      backdrop-blur-xl
      bg-white/70 dark:bg-[#111827]/80
      border border-[#E5E7EB] dark:border-[#2D3748]
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      transition-all duration-300
    ">

      {/* Phone */}
      <a
        href="tel:+919876543210"
        title="Phone"
        className="
          w-11 h-11 flex items-center justify-center
          rounded-xl
          text-[#6B7280] dark:text-[#9CA3AF]
          bg-white dark:bg-[#1F2937]
          hover:text-white
          hover:bg-[#FF7A1A]
          hover:shadow-[0_0_20px_rgba(255,122,26,0.3)]
          transform hover:-translate-y-1
          transition-all duration-300
        "
      >
        <FaPhoneAlt className="text-lg" />
      </a>

      {/* Email */}
      <a
        href="mailto:example@email.com"
        title="Email"
        className="
          w-11 h-11 flex items-center justify-center
          rounded-xl
          text-[#6B7280] dark:text-[#9CA3AF]
          bg-white dark:bg-[#1F2937]
          hover:text-white
          hover:bg-[#FF7A1A]
          hover:shadow-[0_0_20px_rgba(255,122,26,0.3)]
          transform hover:-translate-y-1
          transition-all duration-300
        "
      >
        <FaEnvelope className="text-lg" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className="
          w-11 h-11 flex items-center justify-center
          rounded-xl
          text-[#6B7280] dark:text-[#9CA3AF]
          bg-white dark:bg-[#1F2937]
          hover:text-white
          hover:bg-[#FF7A1A]
          hover:shadow-[0_0_20px_rgba(255,122,26,0.3)]
          transform hover:-translate-y-1
          transition-all duration-300
        "
      >
        <FaLinkedin className="text-lg" />
      </a>

      {/* Pinterest */}
      <a
        href="https://www.pinterest.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        title="Pinterest"
        className="
          w-11 h-11 flex items-center justify-center
          rounded-xl
          text-[#6B7280] dark:text-[#9CA3AF]
          bg-white dark:bg-[#1F2937]
          hover:text-white
          hover:bg-[#FF7A1A]
          hover:shadow-[0_0_20px_rgba(255,122,26,0.3)]
          transform hover:-translate-y-1
          transition-all duration-300
        "
      >
        <FaPinterestP className="text-lg" />
      </a>

      {/* Resume Download */}
      <a
        href="/resume.pdf"
        download
        title="Download Resume"
        className="
          w-11 h-11 flex items-center justify-center
          rounded-xl
          text-[#6B7280] dark:text-[#9CA3AF]
          bg-white dark:bg-[#1F2937]
          hover:text-white
          hover:bg-[#FF7A1A]
          hover:shadow-[0_0_20px_rgba(255,122,26,0.3)]
          transform hover:-translate-y-1
          transition-all duration-300
        "
      >
        <FaDownload className="text-lg" />
      </a>

    </div>
  );
};

export default ContactIcons;
