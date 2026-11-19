import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import PcRive from "pc-rive";
import { usePortfolio } from "../data/PortfolioContext";

const Contact = () => {
  const { contact, site } = usePortfolio();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("asdfghjkl", "template_6w58h5h", formData, "5hKDZVDQ2RbulJaAy")
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ fullName: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
 <div className="relative w-full m-0 p-0 bg-transparent transition-colors duration-500">
  <div className="w-full max-w-full mx-auto rounded-2xl overflow-hidden shadow-xl border border-[#D1FAE5] dark:border-[#2E2E3A] bg-white/25 dark:bg-[#161621]/25 transition-colors duration-500">
      
        <div className="flex flex-col md:flex-row">

          {/* Left Side Animation */}
          <div className="w-full md:w-1/2 bg-[#ECFDF5]/20 dark:bg-[#111118]/20 flex items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md h-72 sm:h-80 md:h-[420px]">
              <PcRive
                src={site.contactRive}
                stateMachines={site.contactRiveStateMachine}
                autoplay={true}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side Form */}
          <motion.div
            className="w-full md:w-1/2 p-8 sm:p-10 lg:p-14 text-[#0F172A] dark:text-[#F5F3FF] flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-8 text-[#16A34A] dark:text-[#7C3AED]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {contact.title}
            </motion.h2>

            <form onSubmit={sendEmail} className="space-y-5">

              {/* Full Name */}
              <motion.input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full rounded-xl px-4 py-3 bg-white dark:bg-[#1E1E2A] border border-[#A7F3D0] dark:border-[#2E2E3A] focus:border-[#16A34A] dark:focus:border-[#7C3AED] focus:ring-2 focus:ring-[#16A34A]/30 dark:focus:ring-[#7C3AED]/30 outline-none transition-all"
              />

              {/* Email */}
              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full rounded-xl px-4 py-3 bg-white dark:bg-[#1E1E2A] border border-[#A7F3D0] dark:border-[#2E2E3A] focus:border-[#16A34A] dark:focus:border-[#7C3AED] focus:ring-2 focus:ring-[#16A34A]/30 dark:focus:ring-[#7C3AED]/30 outline-none transition-all"
              />

              {/* Message */}
              <motion.textarea
                name="message"
                placeholder="Comment or message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full rounded-xl px-4 py-3 bg-white dark:bg-[#1E1E2A] border border-[#A7F3D0] dark:border-[#2E2E3A] focus:border-[#16A34A] dark:focus:border-[#7C3AED] focus:ring-2 focus:ring-[#16A34A]/30 dark:focus:ring-[#7C3AED]/30 outline-none transition-all resize-none"
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                className="w-full py-3 rounded-full font-medium text-white bg-[#16A34A] hover:bg-[#15803D] dark:bg-[#7C3AED] dark:hover:bg-[#6D28D9] shadow-md hover:shadow-lg transition-all duration-300"
              >
                Submit Message
              </motion.button>

              {status && (
                <motion.p
                  className="text-sm text-[#16A34A] dark:text-[#A78BFA] mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {status}
                </motion.p>
              )}
            </form>

            <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-10">
              {contact.socials.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#D1FAE5] dark:border-[#2E2E3A] shadow-md hover:shadow-lg transition-all"
                  title={link.label}
                >
                  {link.video ? (
                    <video
                      src={link.video}
                      autoPlay
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-[#ECFDF5] text-xs font-semibold text-[#166534] dark:bg-[#1E1E2A] dark:text-[#C4B5FD]">
                      {link.label}
                    </span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;