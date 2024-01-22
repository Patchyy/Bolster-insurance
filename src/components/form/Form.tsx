import { FC } from 'react';
import ValueEstimate from './Formsteps/ValueEstimate';
import AdditionalInfo from './Formsteps/AdditionalInfo';
import SpecialObjects from './Formsteps/SpecialObjects';
import Insurance from './Formsteps/Insurance';

import villaImage from '../../assets/house-type-villa.svg';
import rowImage from '../../assets/house-type-rowhouse.svg';
import detachedImage from '../../assets/house-type-detachedhouse.svg';
import appartmentImage from '../../assets/house-type-appartments.svg';

import person from '../../assets/PersonOne.svg';
import persons from '../../assets/personTwo.svg';
import smallFam from '../../assets/small-family.svg';
import midFam from '../../assets/medium-family.svg';
import other from '../../assets/other.svg';

export interface ISelectorType {
  id: number;
  title: string;
  image: string;
}

export const housingData: ISelectorType[] = [
  {
    id: 1,
    title: 'Appartments',
    image: appartmentImage,
  },
  {
    id: 2,
    title: 'Row house',
    image: rowImage,
  },

  {
    id: 3,
    title: 'Detached house',
    image: detachedImage,
  },
  {
    id: 4,
    title: 'Villa',
    image: villaImage,
  },
];

export const familyData: ISelectorType[] = [
  {
    id: 1,
    title: 'One person',
    image: person,
  },
  {
    id: 2,
    title: 'Two persons',
    image: persons,
  },

  {
    id: 3,
    title: 'Small family',
    image: smallFam,
  },
  {
    id: 4,
    title: 'Medium family',
    image: midFam,
  },
  {
    id: 5,
    title: 'Other',
    image: other,
  },
];

interface IForm {
  step: number;
  changeStep: (step: number) => void;
}

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
