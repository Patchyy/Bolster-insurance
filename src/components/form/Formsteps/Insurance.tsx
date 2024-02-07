import { FC, useEffect, useState } from 'react';
import { IFormStep, InsuranceData } from '../../../types/all';
import FormIntro from '../components/FormIntro';
import InsurancePackage from '../components/InsurancePackage';

const Insurance: FC<IFormStep> = ({ updateFormData }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('Gold');

  useEffect(() => {
    updateFormData('package', {
      packageName: selectedPackage,
      subname: selectedPackage,
      value: { value: 1425, valuta: 'eur' },
      included: ['Removal costs'],
      extraOptions: [],
    });
  }, [selectedPackage]);

  return (
    <div>
      <FormIntro
        heading={'Choose your insurance package'}
        subheading="In total your value is € 250.000,00 based on that value we recommend to following package. feel free to choice from the different package and various option we offer."
      />
      <div className="flex justify-center gap-[24px] py-10 flex-wrap lg:flex-nowrap">
        {InsuranceData.map((insuranceDataItem, index) => (
          <InsurancePackage
            insuranceDataItem={insuranceDataItem}
            handleClick={setSelectedPackage}
            selectedPackage={selectedPackage}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Insurance;
