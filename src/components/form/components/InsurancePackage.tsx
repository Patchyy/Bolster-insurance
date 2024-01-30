import { FC } from 'react';
import { TShipmentCategory, TUpdateFormData } from '../../../types/all';

interface IInsurancePackage {
  name: string;
  subname: string;
  price: number;
  included: [];
  recommended?: boolean;
}

const InsurancePackage: FC<IInsurancePackage> = ({
    name,
    subname,
    price,
    included,
    recommended,
}) => {
  return (
    <>
        <div className="flex flex-col w-[300px] h-[720px]  rounded-lg shadow-md">
          <div className="bg-blue w-[300px] text-center rounded-t-lg">
            <span className="text-white font-bold">{recommended}</span>
          </div>
          <h2 className="font-bold text-xl text-center">{name}</h2>
          <span className="text-blue text-center">{subname}</span>
          <h2 className="font-bold text-xl pb-4 text-center">{price}</h2>
          <div className="bg-white-off w-[300px]">
            <div className="px-2">
              <span className="text-blue">Included:</span>
              <ul className="list-image-checkmark translate-x-6 max-w-[230px] space-y-2 py-2">
                <li>{included}</li>
                <li>
                  In case of total loss/missing partial loss for items younger
                  than 12 months: new for old
                </li>
                <li>
                  In case of partial loss: repair costs, actual repair or
                  deprecation
                </li>
                <li>SIT 120 days</li>
                <li>Electrical & mechanical derangement</li>
                <li>Mould & Mildew 30% coverage </li>
                <li>Pair & sets</li>
              </ul>
            </div>
          </div>
          <div className="px-2">
            <h2 className="text-blue">Choose your options:</h2>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Removal costs
              </label>
            </div>
          </div>
        </div>
    </>
  );
};

export default InsurancePackage;
