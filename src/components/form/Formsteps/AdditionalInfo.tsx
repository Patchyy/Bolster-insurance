import { FC } from "react";
import { IFormStep } from "../../../types/all";
import FormIntro from "../components/FormIntro";
import FormDropdown from "../components/FormDropdown";
import { housingData } from "../Form";
import FormInput from "../components/FormInput";
import moveToIcon from "../../../assets/move-to-icon.svg";
import flagNL from "../../../assets/flag-NL.svg";
import flagUSA from "../../../assets/flag-USA.svg";

const AdditionalInfo: FC<IFormStep> = ({ updateFormData, formData }) => {
  return (
    <div>
      <FormIntro heading={"We need some additional information"}></FormIntro>
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
          <div className="flex flex-col bg-white-off py-[18px] px-[18px] w-[152px] h-[152px] justify-center items-center rounded-lg">
            {formData.destination.house && (
              <img
                src={housingData[formData.destination.house - 1].image}
                alt={housingData[formData.destination.house - 1].title}
              />
            )}
          </div>
          <div className="flex bg-white-off w-[64px] h-[46px] justify-center items-center  rounded-lg">
            {formData.destination.country === "America" ? (
              <img src={flagUSA} alt="Flag USA" />
            ) : null}
          </div>
        </div>
        <div className="w-[680px] py-2">
          <FormInput
            name="city"
            category="origin"
            label="Your current address"
            placeholder="Vrijstraat 9, Eindhoven"
            updateFormData={updateFormData}
          ></FormInput>
        </div>
        {formData.origin.city === "Vrijstraat 9, Eindhoven" && (
          <div className="flex gap-[24px]">
            <div className="w-[240px] py-2">
              <FormInput
                name="zip"
                category="origin"
                label="Current zip/postal code"
                placeholder="5611 AT"
                value="5611 AT"
                updateFormData={updateFormData}
              ></FormInput>
            </div>
            <div className="w-[240px] py-2">
              <FormInput
                name="housenumber"
                category="origin"
                label="House number"
                placeholder="9"
                value="9"
                updateFormData={updateFormData}
              ></FormInput>
            </div>
            <div className="w-[150px] py-2">
              <FormInput
                name="addition"
                category="origin"
                label="Addition"
                placeholder="C/D"
                value="C/D"
                updateFormData={updateFormData}
              ></FormInput>
            </div>
          </div>
        )}
        <h2 className="text-xl text-center">The house you are moving to. </h2>
        <FormDropdown
          name="house"
          category="destination"
          label="Select house type"
          placeholder="select house type"
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
            placeholder="Bakerstreet 14th, New York"
            updateFormData={updateFormData}
          ></FormInput>
        </div>

        {formData.destination.city === "Bakerstreet 14th, New York" && (
          <div className="flex gap-[24px]">
            <div className="w-[240px] py-2">
              <FormInput
                name="zip"
                category="destination"
                label="New zip/postal code"
                placeholder="10026"
                value="10026"
                updateFormData={updateFormData}
              ></FormInput>
            </div>
            <div className="w-[240px] py-2">
              <FormInput
                name="housenumber"
                category="destination"
                label="New house number"
                placeholder="14th"
                value="14th"
                updateFormData={updateFormData}
              ></FormInput>
            </div>
            <div className="w-[150px] py-2">
              <FormInput
                name="addition"
                category="destination"
                label="Addition"
                placeholder=""
                value=""
                updateFormData={updateFormData}
              ></FormInput>
            </div>
          </div>
        )}
        <FormDropdown
          name="movingCompany"
          category="movingCompany"
          placeholder="select moving company"
          label="Who are you moving with?"
          updateFormData={updateFormData}
          data={[{ id: 1, title: "Voerman" }]}
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
