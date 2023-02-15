import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
const ToggleDarkMode = ({ isDark = true, setIsDark }) => {
  return (
    <button className="fixed z-20 top-8 left-6 bg-slate-500 p-2 rounded-xl border border-blue-400" onClick={() => setIsDark(!isDark)}>
      {isDark ? (
        <BsFillSunFill className="text-yellow-300 text-lg" />
      ) : (
        <BsFillMoonFill className="text-gray-300 text-lg" />
      )}
    </button>
  );
};

export default ToggleDarkMode;
