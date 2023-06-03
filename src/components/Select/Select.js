import { useId } from 'react';

function Select({ label, options, ...rest }) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Choose time
      </label>
      <select
        id={id}
        class="block h-10 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...rest}
      >
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
