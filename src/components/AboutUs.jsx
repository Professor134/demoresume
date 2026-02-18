import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-[#0e0e0e] text-white font-sans">
      {/* Header */}
      <div className="relative text-center py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <h1 className="text-4xl font-bold tracking-wide">ABOUT US</h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Learn more about our journey, vision, and the people behind our success.
        </p>
      </div>

      {/* Wave Line (simulate with div) */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mb-10"></div>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Mission</h2>
          <p className="text-gray-400">
            We are driven by a passion to deliver high-quality solutions that empower businesses and
            individuals to achieve more. Our mission is to bring innovation and reliability into
            everything we do.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Values</h2>
          <p className="text-gray-400">
            Transparency, innovation, and dedication are at the core of our values. We strive to
            build strong relationships and deliver outstanding service to every client.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#161616] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">Our Story</h2>
          <p className="text-gray-400 text-center">
            Founded in 2020, Brandflow started as a small team of passionate creatives and engineers.
            Over the years, we’ve grown into a full-fledged design and development agency helping
            businesses from startups to enterprises build powerful digital experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            { name: "Alice Johnson", role: "CEO & Founder" },
            { name: "Mark Lee", role: "Lead Developer" },
            { name: "Sophia Turner", role: "Creative Director" },
          ].map((member, i) => (
            <div key={i} className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-24 h-24 bg-gray-700 mx-auto rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-yellow-500">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-10 text-gray-500 text-sm">
        <p>© 2025 Brandflow. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-500">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}
