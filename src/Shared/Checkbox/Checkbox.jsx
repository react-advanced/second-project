const Checkbox = ({ label, onChange, name, isChecked }) => {
  return (
    <div className="flex items-center mr-4 mb-4">
      <input
        id={label}
        type="checkbox"
        className="w-4 h-4 text-indigo-600 bg-indigo-100 border-indigo-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-indigo-800 focus:ring-2 dark:bg-indigo-700 dark:border-indigo-600"
        onChange={onChange}
        name={name}
        checked={isChecked}
        value={name}
      />
      <label
        htmlFor={label}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize cursor-pointer rounded-md  duration-200"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
