import { useFormikContext } from 'formik';
import { useId } from 'react';

function Input({ label, ...rest }) {
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
      <input
        id={id}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...rest}
      />
      {error ? (
        <div className="relative">
          <p className="text-red-500 text-sm absolute">{error}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Input;
