import { FC, useState } from 'react';
import { familyData, housingData } from '../Form';
import FormIntro from '../components/FormIntro';
import FormInput from '../components/FormInput';
import FormSelector from '../components/FormSelector';
import FormFaq from '../components/FormFaq';
import FormSlider from '../components/FormSlider';
import { IFormStep } from '../../../types/all';

const ValueEstimate: FC<IFormStep> = ({ updateFormData, formData }) => {
  const [selectedHouse, setSelectedHouse] = useState<number>(0);
  const [selectedFamily, setSelectedFamily] = useState<number>(0);

  const handleHouseClick = (id: number) => {
    setSelectedHouse(id);

    updateFormData('origin', { house: id });
  };

  const handleFamilyClick = (id: number) => {
    setSelectedFamily(id);

    const family = {
      adults: 0,
      baby: 0,
      children: 0,
    };

    switch (id) {
      case 1:
        family.adults = 1;
        break;
      case 2:
        family.adults = 2;
        break;
      case 3:
        family.adults = 2;
        family.children = 1;
        break;
      case 4:
        family.adults = 2;
        family.children = 2;
    }

    updateFormData('family', { ...family });
  };

  const jsxFooter = <button className="btn">Plan meeting</button>;
  const jsxFooter2 = <span>0 2 0 - 2 4 4 5 6 6 2 </span>;

  return (
    <div>
      <FormIntro
        heading="Don't worry we will help you calculate!"
        subheading="What is your living situation like?"
      />
      <div className="flex flex-wrap -mx-3 py-5 justify-center">
        <div className="w-full px-3 ">
          <FormInput
            label="Can you tell us the country you are moving from?"
            placeholder="Netherlands"
            value={formData.origin.country}
            updateFormData={updateFormData}
            name="country"
            category="origin"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-start ">
        {/* <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          House tpye
        </label> */}
        <h1 className="block tracking-wide text-black font-bold font-roboto mb-2 text-lg">
          What does your house look like?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-[24px] py-5 cursor-pointer">
          {housingData.map((housingDataItem) => {
            return (
              <FormSelector
                key={housingDataItem.id}
                data={housingDataItem}
                onClick={handleHouseClick}
                selectedItem={selectedHouse}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 py-5 justify-center">
        <div className="w-full px-3 ">
          <FormInput
            label="Can you give us a estimate of the m² of your house?"
            placeholder="120 m²"
            updateFormData={updateFormData}
            name="size"
            category="origin"
          />
        </div>
      </div>
      <h1 className="block tracking-wide text-black font-bold font-roboto text-lg">
        With who do you live?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-[24px] py-8 cursor-pointer">
        {familyData.map((familyDataItem) => {
          return (
            <FormSelector
              key={familyDataItem.id}
              data={familyDataItem}
              onClick={handleFamilyClick}
              selectedItem={selectedFamily}
            />
          );
        })}
      </div>

      {formData.origin.country &&
      formData.origin.house &&
      formData.family.adults ? (
        <>
          <h1 className="text-3xl text-center mx-auto mt-[48px] mb-[48px] font-spoof w-2/3">
            Based on your given information we estimate your house hold effects
            are worth
          </h1>
          <FormSlider
            min={10000}
            max={150000}
            initialValue={(10000 + 150000) / 2}
            value={formData.origin.value.value}
            step={10000}
            updateFormData={updateFormData}
            valuta="eur"
            name="value"
            category="origin"
          />
          <span className="text-pink text-center w-full px-24 block m-auto text-xl">
            Adjust the slider accordingly if you think it should be more or
            less. be aware that underinsuring means that the full amount cannot
            be paid out since it’s lower than the estimated value
          </span>
          <h2 className=" font-spoof text-blue text-3xl pt-[72px] text-center">
            Having trouble deciding?
          </h2>
          <h3 className=" font-spoof text-black text-xl pt-[24px] text-center">
            Don't worry here are some tips that could help!
          </h3>
          <div>
            <ul className="w-2/3 mx-auto mt-8 rounded-xl">
              <FormFaq
                title={'Had contact with your mover already?'}
                content={
                  'Have you had contact with a mover already and do you know your m³ / ft³ ?'
                }
                footer={jsxFooter}
              />
              <FormFaq
                title={'Have you looked at your Home contents insurance?'}
                content={
                  'Your home right now probably has a home contents insurance this is also based on the value of your household contents. This could give you a estimate of how much your stuff is worth '
                }
              />
              <FormFaq
                title={'Need help?'}
                content={
                  'Don’t worry. We understand it can be difficult to estimate how much your stuff is worth. We are here for you. Call the number below to speak to an expert or plan a meeting with an proffesional.'
                }
                footer={jsxFooter2}
              />
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ValueEstimate;
