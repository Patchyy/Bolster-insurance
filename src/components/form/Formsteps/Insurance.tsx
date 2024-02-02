import { FC, useState } from 'react';
import { IFormStep, InsuranceData } from '../../../types/all';
import FormIntro from '../components/FormIntro';
import InsurancePackage from '../components/InsurancePackage';

const Insurance: FC<IFormStep> = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('Gold');

  return (
    <div>
      <FormIntro
        heading={'Choose your insurance package'}
        subheading="In total your value is € 250.000,00 based on that value we recommend to following package. feel free to choice from the different package and various option we offer."
      />
      <div className="flex justify-center gap-[24px] py-10 flex-wrap lg:flex-nowrap">
        {InsuranceData.map((insuranceDataItem) => (
          <InsurancePackage
            insuranceDataItem={insuranceDataItem}
            // packageName={insuranceDataItem.packageName}
            // subname={insuranceDataItem.subname}
            // value={insuranceDataItem.value}
            // included={insuranceDataItem.included}
            // ourAdvice={insuranceDataItem.ourAdvice}
            handleClick={setSelectedPackage}
            selectedPackage={selectedPackage}
          />
        ))}
      </div>
    </div>
  );
};

export default Insurance;
