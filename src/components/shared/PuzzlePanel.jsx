// PuzzlePanel.jsx
export default function PuzzlePanel({ label, content, onClose }) {
  return (
    <div className="absolute top-1/2 left-1/2 w-[40%] p-6 bg-white rounded-lg shadow-lg z-20 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-xl font-bold mb-2">{label}</h2>
      <p className="text-gray-700">{content}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Close
      </button>
    </div>
  );
}
