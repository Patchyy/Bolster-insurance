import { FC } from 'react';

interface IFormInput {
  label: string;
  placeholder: string;
  fullWidth?: boolean;
}

const FormInput: FC<IFormInput> = ({
  label,
  placeholder,
  fullWidth = true,
}) => {
  return (
    <>
      <div className="w-[1032px] px-3 ">
        <label
          className="block tracking-wide text-black text-xs font-bold font-roboto mb-2"
          htmlFor="grid-origin"
        >
          {label}
        </label>
        <input
          className="appearance-none block w-full bg-white-off text-black border border-blue-dark  border-opacity-10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue"
          id="grid-origin"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FormInput;
