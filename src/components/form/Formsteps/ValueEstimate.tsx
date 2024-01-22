import { useState } from 'react';
import { familyData, housingData } from '../Form';
import FormIntro from '../components/FormIntro';
import FormInput from '../components/FormInput';
import FormSelector from '../components/FormSelector';

const ValueEstimate = () => {
  const [selectedHouse, setSelectedDiv] = useState(Number);
  const [selectedFamily, setSelectedFamily] = useState(Number);

  const handleHouseClick = (id: number) => {
    setSelectedDiv(id);
  };

  const handleFamilyClick = (id: number) => {
    setSelectedFamily(id);
  };

  return (
    <div>
      <FormIntro
        heading="Don't worry we will help you calculate!"
        subheading="What is your living situation like?"
      />
      <div className="flex flex-wrap -mx-3 py-5">
        <FormInput
          label="Can you tell us the country you are moving from?"
          placeholder="Netherlands"
        />
      </div>
      <div className="flex flex-wrap items-start">
        {/* <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          House tpye
        </label> */}
        <div className="w-full flex flex-wrap justify-center gap-[24px] py-5 cursor-pointer">
          {housingData.map((housingDataItem) => {
            return (
              <FormSelector
                data={housingDataItem}
                onClick={handleHouseClick}
                selectedItem={selectedHouse}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 py-5">
        <FormInput
          label="Can you give us a estimate of the m² of your house?"
          placeholder="120 m²"
        />
      </div>
      <div className="w-full flex flex-wrap justify-center gap-[24px] py-5 cursor-pointer">
        {familyData.map((familyDataItem) => {
          return (
            <FormSelector
              data={familyDataItem}
              onClick={handleFamilyClick}
              selectedItem={selectedFamily}
            />
          );
        })}
      </div>
      <h1 className="text-3xl text-center mx-auto mt-[48px] mb-[48px] font-spoof w-2/3">
        Based on your given information we estimate your house hold effects are
        worth
      </h1>

      <div className="relative mb-6">
        <label
          htmlFor="large-range"
          className="block mb-2 text-xl font-medium text-blue text-center"
        >
          € 15000,-
        </label>
        <input
          id="large-range"
          type="range"
          value="1000"
          min="100"
          max="1500"
          className="w-full h-4 bg-white-off rounded-lg appearance-none cursor-pointer range-lg "
        />
        <span className="text-sm text-gray-500 absolute start-0 -bottom-6">
          Min $100
        </span>
        <span className="text-sm text-gray-black  absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          $500
        </span>
        <span className="text-sm text-black absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          $1000
        </span>
        <span className="text-sm text-black  absolute end-0 -bottom-6">
          Max $1500
        </span>
      </div>
    </div>
  );
};

export default ValueEstimate;
