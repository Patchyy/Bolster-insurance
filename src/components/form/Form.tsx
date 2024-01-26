import { FC, useState } from 'react';
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
import { IShipment, TShipmentCategory, TUpdateFormData } from '../../types/all';
import Button from '../Button';

export interface ISelectorType {
  id: number;
  title: string;
  image?: string;
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

const renderFormStep = (
  step: number,
  updateFormData: TUpdateFormData,
  formData: IShipment
) => {
  switch (step) {
    case 1:
      return (
        <ValueEstimate updateFormData={updateFormData} formData={formData} />
      );
    case 2:
      return (
        <AdditionalInfo updateFormData={updateFormData} formData={formData} />
      );
    case 3:
      return (
        <SpecialObjects updateFormData={updateFormData} formData={formData} />
      );
    case 4:
      return <Insurance updateFormData={updateFormData} formData={formData} />;
  }
};

const Form: FC<IForm> = ({ step, changeStep }) => {
  const [formData, setFormData] = useState<IShipment>({
    origin: {
      country: '',
      size: 0,
      zip: '',
      city: '',
      street: '',
      housenumber: '',
      addition: '',
      house: null,
      value: {
        value: 0,
        valuta: '',
      },
    },
    destination: {
      country: '',
      zip: '',
      city: '',
      street: '',
      housenumber: '',
      addition: '',
      house: null,
    },
    family: {
      adults: 0,
      children: 0,
      baby: 0,
    },
    movingCompany: '',
    specialItems: {
      antique: {
        active: false,
        items: [],
      },
      collections: {
        active: false,
        items: [],
      },
      art: {
        active: false,
        items: [],
      },
      instruments: {
        active: false,
        items: [],
      },
      other: {
        active: false,
        items: [],
      },
    },
    package: {
      chosenPackge: '',
      value: {
        value: 0,
        valuta: '',
      },
    },
  });

  const updateFormData = (category: TShipmentCategory, newData: any) => {
    let newFormData = formData;

    if (category == 'specialItems') {
      newFormData = {
        ...newFormData,
        [category]: {
          ...(formData[category] as any),
          ...newData,
        },
      };
    } else {
      newFormData = {
        ...newFormData,
        [category]: {
          ...(formData[category] as any),
          ...newData,
        },
      };
    }

    console.log(category, newData, newFormData);

    setFormData(newFormData);
  };

  const submitForm = () => {
    // POST met JSON SERVER - Stuur FormData mee
    // User redirecten naar dashboard page
  };

  return (
    <div>
      {step > 1 && (
        <div className="flex flex-wrap w-full justify-start py-10">
          <Button
            type="pink"
            text="Previous step"
            onClick={() => changeStep(step - 1)}
          />
        </div>
      )}

      {renderFormStep(step, updateFormData, formData)}

      {step < 4 && (
        <div className="flex flex-wrap w-full justify-center py-10">
          <Button
            type="blue"
            text="Next step"
            onClick={() => changeStep(step + 1)}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default Form;
