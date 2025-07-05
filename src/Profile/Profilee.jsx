import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import {educationData ,workData} from "./profile"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const renderSection = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfo />;
      case "education":
        return <EducationSection data={educationData} />;
      case "work":
        return <WorkSection data={workData} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-5/6 bg-transparent py-8 px-4 md:px-10 pt-28">
      <div className="max-w-6xl mx-auto bg-white/25 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-10 transition-all duration-500">
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-6">
          {["personal", "education", "work"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 font-semibold rounded-md transition-all duration-300 ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-black dark:text-white hover:text-blue-500"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[3px] w-6 bg-blue-600 rounded-full transition-all"></span>
              )}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="h-[80vh] overflow-hidden transition-all duration-500">
          <div className="h-full">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
