import { FC } from 'react';
import { ISelectorType } from '../Form';

interface IFormSelector {
  data: ISelectorType;
  onClick: (id: number) => void;
  selectedItem: number;
}

const FormSelector: FC<IFormSelector> = ({ data, onClick, selectedItem }) => {
  return (
    <>
      <div
        key={data.id}
        className={`flex flex-col bg-white-off py-[12.5px] px-[39px] w-[240px] h-[230px] justify-center items-center rounded-lg ${
          selectedItem === data.id ? ' border-2 border-blue' : ''
        }`}
        onClick={() => onClick(data.id)}
      >
        <img className=" w-[150px] h-[150px]" src={data.image}></img>
        <span className="mt-[24px] text-black font-semibold">{data.title}</span>
      </div>
    </>
  );
};

export default FormSelector;
