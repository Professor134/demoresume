// PuzzleGrid.jsx
import { useState } from "react";
import PuzzlePanel from "./shared/PuzzlePanel";

const puzzleData = [
  { label: "Dashboard", content: "Analytics in one place." },
  { label: "Wallet", content: "Your wallet and transactions." },
  { label: "Family", content: "Manage your family members." },
  { label: "Goals", content: "Set and track goals." },
  { label: "Reports", content: "Generate expense reports." },
  { label: "Settings", content: "Change preferences." },
];

export default function PuzzleGrid() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-full h-screen bg-gray-100 flex flex-wrap justify-center items-center gap-2 p-10">
      {puzzleData.map((piece, i) => (
        <button
          key={i}
          className="w-[120px] h-[120px] bg-gradient-to-br from-sky-400 to-blue-600 text-white font-bold text-sm shadow-md hover:scale-105 transition-transform clip-puzzle"
          onClick={() => setActive(i)}
        >
          {piece.label}
        </button>
      ))}

      {active !== null && (
        <PuzzlePanel
          label={puzzleData[active].label}
          content={puzzleData[active].content}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
