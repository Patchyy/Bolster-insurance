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
      {}
    </div>
  );
};

export default ValueEstimate;
