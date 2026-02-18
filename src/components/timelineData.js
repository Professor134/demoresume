// src/data/timelineData.js
export const timelineSteps = [
  {
    id: 'personal',
    title: 'personal info',
    content: (
      <div>
        <h2 className="text-xl font-bold">Personal Info</h2>
        <p>Name: Parth Chavan</p>
        <p>Email: parth@example.com</p>
        <p>Location: India</p>
      </div>
    ),
  },
  {
    id: 'education',
    title: 'educational',
    content: (
      <div>
        <h2 className="text-xl font-bold">Educational Info</h2>
        <p>College: VJTI</p>
        <p>Degree: B.Tech in IT</p>
        <p>Year: 2022 - 2026</p>
      </div>
    ),
  },
  {
    id: 'experience',
    title: 'experience',
    content: (
      <div>
        <h2 className="text-xl font-bold">Experience</h2>
        <p>Company: XYZ Tech</p>
        <p>Role: Web Developer Intern</p>
        <p>Duration: Jan 2024 - Apr 2024</p>
      </div>
    ),
  },
];
