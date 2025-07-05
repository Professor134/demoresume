import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactIcons from "@/Hero/ContactIcons";

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
        "asdfghjkl",       // Replace with your EmailJS service ID
        "template_6w58h5h",      // Replace with your EmailJS template ID
        formData,
        "5hKDZVDQ2RbulJaAy"      // Replace with your EmailJS public key
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
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4 py-12 pt-32">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* Left side */}
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
            alt="office"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 ">
           <ContactIcons/>
          </div>
          </div>

        {/* Right side */}
        <div className="md:w-1/2 p-8 backdrop-blur-sm bg-white/25">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact Form</h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none bg-white/70"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none bg-white/70"
              required
            />
            <textarea
              name="message"
              placeholder="Comment or message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none bg-white/70 text-black"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-md py-2 transition"
            >
              Submit
            </button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

