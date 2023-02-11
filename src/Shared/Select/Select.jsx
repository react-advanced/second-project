const Select = ({
  id = "",
  label = "",
  optionList = [],
  onChange = () => {},
  value = "",
}) => {
  return (
    <div className="my-5 flex items-center justify-center max-w-xs mx-auto">
      <label
        htmlFor={id}
        className="block mr-3 text-sm font-medium text-gray-900 dark:text-white capitalize"
      >
        {label}
      </label>
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigoa-500 focus:border-indigoa-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        onChange={onChange}
      >
        {optionList.map((option, idx) => (
          <option key={idx} selected={value == option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
