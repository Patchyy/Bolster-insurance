import { FC } from 'react';
import { TShipmentCategory, TUpdateFormData } from '../../../types/all';

interface IFormInput {
  name: string;
  category: TShipmentCategory;
  label: string;
  placeholder: string;
  fullWidth?: boolean;
  value?: string;
  updateFormData: TUpdateFormData;
}

const FormInput: FC<IFormInput> = ({
  name,
  category,
  label,
  placeholder,
  fullWidth = true,
  value,
  updateFormData,
}) => {
  return (
    <>
      <label
        className="block tracking-wide text-black text-xs font-bold font-roboto mb-2"
        htmlFor="grid-origin"
      >
        {label}
      </label>
      <input
        name={name}
        className="appearance-none block w-full bg-white-off text-black border border-blue-dark  border-opacity-10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue"
        id="grid-origin"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) =>
          updateFormData(category, { [name]: event.target.value })
        }
      />
    </>
  );
};

export default FormInput;
