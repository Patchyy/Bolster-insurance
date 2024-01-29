import { FC } from 'react';
import { IFormStep } from '../../../types/all';
import FormIntro from '../components/FormIntro';

const Insurance: FC<IFormStep> = () => {
  return (
    <div>
      <FormIntro
        heading={'Choose your insurance package'}
        subheading="In total your value is € 250.000,00 based on that value we recommend to following package. feel free to choice from the different package and various option we offer."
      />
      <div className="flex justify-center">
        <div className="flex flex-col w-[300px] h-[720px]  rounded-lg shadow-md">
          <div className="bg-blue w-[300px] text-center rounded-t-lg">
            <span className="text-white font-bold">Our recommendation</span>
          </div>
          <h2 className="font-bold text-xl text-center">Gold</h2>
          <span className="text-blue text-center">Like & kind replacement</span>
          <h2 className="font-bold text-xl pb-4 text-center">€ 1.425,00</h2>
          <div className="bg-white-off w-[300px]">
            <div className="px-2">
              <span className="text-blue">Included:</span>
              <ul className="list-image-checkmark translate-x-6 max-w-[230px] space-y-2 py-2">
                <li>Silver coverage</li>
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
      </div>
    </div>
  );
};

export default Insurance;
