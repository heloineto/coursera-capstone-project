import { useFormikContext } from 'formik';
import { useId } from 'react';

function Select({ label, options, ...rest }) {
  const { errors, touched } = useFormikContext();
  const id = useId();

  const error = touched[rest.name] ? errors[rest.name] : undefined;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        id={id}
        className="block h-10 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...rest}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error ? (
        <div className="relative">
          <p className="text-red-500 text-sm absolute">{error}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Select;
