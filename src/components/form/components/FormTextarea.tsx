import { FC } from "react";
import { TUpdateFormData } from "../../../types/all";

interface IFormTextarea {
  name: string;
  category: any;
  label: string;
  placeholder: string;
  fullWidth?: boolean;
  value?: string;
  updateFormData?: TUpdateFormData;
}

const FormTextarea: FC<IFormTextarea> = ({
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
        className="block tracking-wide text-black text-xs font-bold font-roboto mb-2 "
        htmlFor="grid-destination"
      >
        {label}
      </label>
      <textarea
        name={name}
        className="appearance-none block w-full h-[144px] bg-white-off text-black border border-blue-dark  border-opacity-10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue justify-start"
        id="grid-destination"
        placeholder={placeholder}
        value={value}
        onChange={(event) =>
          updateFormData &&
          updateFormData(category, { [name]: event.target.value })
        }
      />
    </>
  );
};

export default FormTextarea;
