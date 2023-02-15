const Tab = ({ children, onClick, isActive }) => {
  return (
    <span
      className={` ${
        isActive ? "bg-indigo-600 hover:bg-indigo-800" : "bg-slate-600"
      } mx-3 capitalize font-medium  p-2 cursor-pointer rounded-md  duration-200 text-sm text-white`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Tab;
