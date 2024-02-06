import { FC } from "react";
import { TUpdateFormData } from "../../../types/all";
import { ISelectorType } from "../Form";

interface IFormDropdown {
  name: string;
  category: any;
  label: string;
  fullWidth?: boolean;
  data: ISelectorType[];
  placeholder: string;
  updateFormData?: TUpdateFormData;
}

const FormDropdown: FC<IFormDropdown> = ({
  name,
  category,
  label,
  data,
  placeholder,
  updateFormData,
}) => {
  return (
    <div className="flex flex-wrap py-5 align-center flex-col w-full">
      <label
        htmlFor={name}
        className="block tracking-wide text-black text-xs font-bold font-roboto mb-2"
      >
        {label}
      </label>
      <select
        defaultValue={placeholder}
        name={name}
        id={name}
        className=" block w-full bg-white-off text-black border border-blue-dark  border-opacity-10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue"
        onChange={(event) =>
          updateFormData &&
          updateFormData(category, { [name]: parseInt(event.target.value) })
        }
      >
        <option disabled>{placeholder}</option>
        {data.map((dataItem) => {
          return (
            <option key={dataItem.id} value={dataItem.id}>
              {dataItem.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormDropdown;
