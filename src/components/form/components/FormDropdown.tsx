import { FC } from 'react';
import { TShipmentCategory, TUpdateFormData } from '../../../types/all';
import { ISelectorType } from '../Form';

interface IFormDropdown {
  name: string;
  category: TShipmentCategory;
  label: string;
  fullWidth?: boolean;
  data: ISelectorType[];
  updateFormData: TUpdateFormData;
}

const FormDropdown: FC<IFormDropdown> = ({
  name,
  category,
  label,
  fullWidth = true,
  data,
  updateFormData,
}) => {
  return (
    <div className="flex flex-wrap py-5 align-center flex-col ">
      <label
        htmlFor="housetypes"
        className="block tracking-wide text-black text-xs font-bold font-roboto mb-2"
      >
        {label}
      </label>
      <select
        name={name}
        id="housetypes"
        className=" block w-[680px] bg-white-off text-black border border-blue-dark  border-opacity-10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue"
        onChange={(event) =>
          updateFormData(category, { [name]: parseInt(event.target.value) })
        }
      >
        <option selected disabled>
          Chose your new house type:
        </option>
        {data.map((dataItem) => {
          return <option value={dataItem.id}>{dataItem.title}</option>;
        })}
      </select>
    </div>
  );
};

export default FormDropdown;
