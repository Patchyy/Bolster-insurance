import { FC } from 'react';
import { IShipment, InsuranceData } from '../../../types/all';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import InsurancePackage from '../components/InsurancePackage';

interface ISummary {
  submitForm: () => void;
  formData: IShipment;
}

const Summary: FC<ISummary> = ({ submitForm, formData }) => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <table className="w-6/12 text-sm text-left rtl:text-right text-black">
        <caption className="bg-blue text-left text-white font-medium text-l px-6 py-2 rounded-t-lg">
          Storage
        </caption>
        <thead className="bg-white text-xs text-black uppercase  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Origin
            </th>
            <th scope="col" className="px-6 py-3">
              Destination
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
            <th scope="col" className="px-6 py-3">
              Moving company
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white-off border-b " key={formData.id}>
            <td scope="row" className="px-6 py-4 whitespace-nowrap ">
              {formData.origin.country}
            </td>
            <td className="px-6 py-4">{formData.destination.country}</td>
            <td className="px-6 py-4">
              {formData.origin.value.valuta === 'eur'} {'€ '}
              {formData.origin.value.value}
            </td>
            <td className="px-6 py-4">{formData.movingCompany}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col w-[300px] h-[720px] rounded-lg shadow-md border border-blue-dark border-opacity-10 relative">
        <div className="bg-green w-[299px] text-center rounded-t-lg absolute -top-4 ">
          <span className="text-white font-bold">Your choice</span>
        </div>
        <h2 className="font-bold text-xl text-center pt-8 ">
          {formData.package.packageName}
        </h2>
        <span className="text-green text-center pt-2">
          Like & kind replacement
        </span>
        <h2 className="font-bold text-xl pb-4 text-center">
          {formData.package.value.valuta === 'eur'}
          {'€ '}
          {formData.package.value.value}
        </h2>
        <div className="bg-white-off w-[300px]">
          <div className="px-2 py-4">
            <span className="text-green">Included:</span>
            <ul className="list-image-checkmark translate-x-6 max-w-[230px] space-y-2 py-2">
              <li>Silver coverage</li>
              <li>
                In case of total loss/missing partial loss for items younger
                than 12 months: new for old
              </li>
              <li>
                In case of partial loss: repair costs, actual repair or
                depreciation
              </li>
              <li>SIT 120 days</li>
              <li>Electrical & mechanical derangement</li>
              <li>Mould & Mildew 30% coverage</li>
              <li>Pair & sets</li>
            </ul>
          </div>
        </div>
        <div className="px-2 pt-4">
          <h2 className="text-green">Choose your options:</h2>
          <div className="flex flex-col items-start mb-4">
            {formData.package.extraOptions?.map((item, index) => (
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
      <table className="w-6/12 text-sm text-left rtl:text-right text-black py-5">
        <caption className="bg-blue text-left text-white font-medium text-l px-6 py-2 rounded-t-lg">
          Package overview
        </caption>
        <thead className="bg-white text-xs text-black uppercase  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Special objects
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white-off" key={formData.id}>
            <td scope="row" className="px-6 py-4 whitespace-nowrap ">
              Antique chair
            </td>
            <td className="px-6 py-4">2.000,-</td>
          </tr>
          <tr className="bg-white-off border-b " key={formData.id}>
            <td scope="row" className="px-6 py-4 whitespace-nowrap text-blue">
              House hold effects
            </td>
            <td className="px-6 py-4">9.000,-</td>
          </tr>
          <tr className="bg-white-off border-b " key={formData.id}>
            <td scope="row" className="px-6 py-4 whitespace-nowrap text-blue">
              Sub Total
            </td>
            <td className="px-6 py-4">11.000,-</td>
          </tr>
        </tbody>
      </table>
      <div className="py-5">
        <Button type="pink" text="Submit" onClick={submitForm} />
      </div>
    </div>
  );
};

export default Summary;
