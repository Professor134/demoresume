
export default function HexButton({ label, style, isActive, onClick }) {
  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out`}
      style={style}
      onClick={onClick}
    >
      <div
        className={` w-[150px] h-[150px] flex items-center justify-center text-black dark:text-white font-bold text-xs bg-gradient-to-br from-blue-600 dark:from-violetNeon via-zinc-300 dark:via-transparent to-sky-400 dark:to-violet-600 clip-hex1  hover:scale-110 ${
          isActive ? "scale-[1.5]" : ""
        } transition-transform`}
      >
        {label}
      </div>
    </div>
  );
}


