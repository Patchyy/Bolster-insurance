import { FC } from 'react';
import ValueEstimate from './Formsteps/ValueEstimate';
import AdditionalInfo from './Formsteps/AdditionalInfo';
import SpecialObjects from './Formsteps/SpecialObjects';
import Insurance from './Formsteps/Insurance';

interface IForm {
  step: number;
  changeStep: (step: number) => void;
}

interface IHousetypes {
  title: string;
  image: string;
}

export const housingData: IHousetypes[] = [
  {
    title: 'Villa',
    image: 'house-type-villa.svg',
  },
  {
    title: 'Appartments',
    image: 'house-type-appartments.svg',
  },
  {
    title: 'Detached house',
    image: 'house-type-detachedhouse.svg',
  },
  {
    title: 'Row house',
    image: 'house-type-rowhouse.svg',
  },
];

const renderFormStep = (step: number) => {
  switch (step) {
    case 1:
      return <ValueEstimate />;
    case 2:
      return <AdditionalInfo />;
    case 3:
      return <SpecialObjects />;
    case 4:
      return <Insurance />;
  }
};

const Form: FC<IForm> = ({ step, changeStep }) => {
  return (
    <div>
      {step > 1 && (
        <div className="">
          <button onClick={() => changeStep(step - 1)}>Omlaag</button>
        </div>
      )}

      {renderFormStep(step)}

      {step < 4 && (
        <div className="">
          <button onClick={() => changeStep(step + 1)}>Omhoog</button>
        </div>
      )}
    </div>
  );
};

export default Form;
