import { FC } from 'react';
import { IShipmentPackage } from '../../../types/all';
import classNames from 'classnames';

interface IIsurancePackage {
  handleClick: (insurancePackage: string) => void;
  insuranceDataItem: IShipmentPackage;
  selectedPackage: string;
}

const InsurancePackage: FC<IIsurancePackage> = ({
  insuranceDataItem,
  handleClick,
  selectedPackage,
}) => {
  return (
    <div
      className={classNames({
        'flex flex-col w-[300px] h-[720px] rounded-lg shadow-md border border-blue-dark border-opacity-10 relative':
          true,
        'border-green border-2 opacity-100 shadow-none':
          selectedPackage === insuranceDataItem.packageName,
      })}
      onClick={() => handleClick(insuranceDataItem.packageName)}
    >
      <div className="bg-blue w-[299px] text-center rounded-t-lg absolute -top-4 ">
        {insuranceDataItem.ourAdvice && (
          <span className="text-white font-bold">recommended</span>
        )}
      </div>
      <h2 className="font-bold text-xl text-center pt-8 ">
        {insuranceDataItem.packageName}
      </h2>
      <span className="text-blue text-center pt-2">
        {insuranceDataItem.subname}
      </span>
      <h2 className="font-bold text-xl pb-4 text-center">
        {insuranceDataItem.value.value}
      </h2>
      <div className="bg-white-off w-[300px]">
        <div className="px-2 py-4">
          <span className="text-blue">Included:</span>
          <ul className="list-image-checkmark translate-x-6 max-w-[230px] space-y-2 py-2">
            {insuranceDataItem.included.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-2 pt-4">
        <h2 className="text-blue">Choose your options:</h2>
        <div className="flex flex-col items-start mb-4">
          {insuranceDataItem.extraOptions?.map((item, index) => (
            <div key={index}>
              <input
                id={`checkbox-${index}`}
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 align-middle"
              />
              <label
                htmlFor={`checkbox-${index}`}
                className="ms-2 text-sm font-medium text-gray-900"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsurancePackage;
