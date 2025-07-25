import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import PcRive from "pc-rive";
// import PcRive from "./PcRive";

const socialLinks = [
  {
    url: "https://www.instagram.com/parthchavan653/?utm_source=qr&r=nametag",
    label: "Instagram",
    video: "/insta.mp4",
  },
  {
    url: "https://www.linkedin.com/in/parth-chavan-6284152a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    video: "linkedin.mp4",
  },
  {
    url: "https://pin.it/11BuroVx1",
    label: "Pinterest",
    video: "pintrest.mp4",
  },
  {
    url: "https://wa.me/qr/7WYVGT4ISCPJL1",
    label: "WhatsApp",
    video: "whatsapp.mp4",
  },
];

const Contact = () => {
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
      .send(
        "asdfghjkl", // Replace with your EmailJS service ID
        "template_6w58h5h", // Replace with your EmailJS template ID
        formData,
        "5hKDZVDQ2RbulJaAy" // Replace with your EmailJS public key
      )
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
    <div className="relative mt-5 max-h-screen overflow-y-auto no-scrollbar px-4 sm:px-6">
      <div className="w-full flex flex-col md:flex-row rounded-xl shadow-xl bg-gray-800 backdrop-blur-md overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gray-600 flex items-center justify-center p-4">
          <div className="w-full h-64 sm:h-80 md:h-full">
            <PcRive
              src="contact.riv"
              stateMachines="State Machine 1"
              autoplay={true}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          className="w-full md:w-1/2 p-6 sm:p-10 bg-black text-white flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6 text-green-500 dark:text-violetNeon"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact Form
          </motion.h2>

          <form onSubmit={sendEmail} className="space-y-4">
            <motion.input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-green-500 dark:border-violetNeon rounded-md p-2 focus:outline-none bg-white text-black"
              required
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-green-500 dark:border-violetNeon rounded-md p-2 focus:outline-none bg-white text-black"
              required
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              name="message"
              placeholder="Comment or message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-green-500 dark:border-violetNeon rounded-md p-2 focus:outline-none bg-white text-black"
              rows="4"
              required
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-md py-2 transition"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
            >
              Submit
            </motion.button>

            {status && (
              <motion.p
                className="text-sm text-green-500 dark:text-violetNeon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {status}
              </motion.p>
            )}
          </form>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-lg border-white/30 backdrop-blur-md"
                title={link.label}
              >
                <video
                  src={link.video}
                  autoPlay
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
