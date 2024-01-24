import { FC } from 'react';
import { IFormStep, TShipmentCategory } from '../../../types/all';
import FormIntro from '../components/FormIntro';
import FormDropdown from '../components/FormDropdown';
import { housingData } from '../Form';
import FormInput from '../components/FormInput';
import moveToIcon from '../../../assets/move-to-icon.svg';
import questionPink from '../../../assets/question-mark-pink.svg';
import flagNL from '../../../assets/flag-NL.svg';

const AdditionalInfo: FC<IFormStep> = ({ updateFormData, formData }) => {
  return (
    <div>
      <FormIntro heading={'We need some additional information'}></FormIntro>
      <div className="flex flex-wrap flex-col content-center text-left">
        <div className="flex items-center justify-between pt-[40px] pb-2">
          <div className="flex bg-white-off w-[64px] h-[46px] justify-center items-center  rounded-lg">
            <img src={flagNL} alt="" />
          </div>
          <div className="flex flex-col bg-white-off py-[18px] px-[18px] w-[152px] h-[152px] justify-center items-center rounded-lg">
            {formData.origin.house && (
              <img
                src={housingData[formData.origin.house - 1].image}
                alt={housingData[formData.origin.house - 1].title}
              />
            )}
          </div>
          <img src={moveToIcon} alt="" />
          <div className="flex flex-col bg-white-off py-[12.5px] px-[39px] w-[152px] h-[152px] justify-center items-center rounded-lg">
            <img src={questionPink} alt="" className="fill-bg-pink" />
          </div>
          <div className="flex bg-white-off w-[64px] h-[46px] justify-center items-center  rounded-lg">
            test
          </div>
        </div>
        <div className="w-[680px] py-2">
          <FormInput
            name="city"
            category="origin"
            label="Your current address"
            placeholder="5611 AT,  Eindhoven, Vrijstraat 9 C/D"
            updateFormData={updateFormData}
          ></FormInput>
        </div>
        <FormDropdown
          name="movingCompany"
          category="movingCompany"
          label="Who are you moving with?"
          updateFormData={updateFormData}
          data={[{ id: 1, title: 'Voerman' }]}
        />
        <h2 className="text-xl text-center">The house you are moving to. </h2>
        <FormDropdown
          name="house"
          category="destination"
          label="Select house type"
          updateFormData={updateFormData}
          data={housingData}
        />
        <div className="w-[680px] py-2">
          <FormInput
            name="country"
            category="destination"
            label="Country you are moving to"
            placeholder="America"
            updateFormData={updateFormData}
          ></FormInput>
        </div>

        <div className="w-[680px] py-2">
          <FormInput
            name="city"
            category="destination"
            label="Your new address"
            placeholder="5611 AT,  Eindhoven, Vrijstraat 9 C/D"
            updateFormData={updateFormData}
          ></FormInput>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
