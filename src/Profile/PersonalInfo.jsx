import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex gap-4 h-full overflow-hidden w-full">
      {/* Left Side - Info */}
      <div className="w-2/3 flex items-center justify-center">
        <div className="space-y-4 text-gray-800 bg-white/50 shadow-lg rounded-xl p-6 w-[90%]">
          <h2 className="text-2xl font-bold text-blue-700">Personal Information</h2>

          <div className="flex items-start gap-2">
            <h3 className="font-semibold">Name:</h3>
            <span>Parth Suresh Chavan</span>
          </div>

          <div className="flex items-start gap-2">
            <h3 className="font-semibold">Email:</h3>
            <span>parthchavan@example.com</span>
          </div>

          <div className="flex items-start gap-2">
            <h3 className="font-semibold">Phone:</h3>
            <span>+91 12345 67890</span>
          </div>

          <div className="flex items-start gap-2">
            <h3 className="font-semibold">Date of Birth:</h3>
            <span>January 6, 2006</span>
          </div>   

          <div className="flex items-start gap-2">
            <h3 className="font-semibold">Address:</h3>
            <span>Malibu, California</span>
          </div>
          
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="w-1/3 flex items-center justify-center ">
        <img
          src="bg11.png"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
