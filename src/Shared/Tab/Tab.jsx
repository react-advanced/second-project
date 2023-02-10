const Tab = ({ children, onClick }) => {
  return (
    <span
      className="mx-3 capitalize font-medium bg-sky-600 p-2 cursor-pointer rounded-md hover:bg-sky-800 duration-200 text-sm"
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Tab;
