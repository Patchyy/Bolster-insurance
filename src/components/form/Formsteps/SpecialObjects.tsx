import { FC, useEffect, useState } from 'react';
import {
  IFormStep,
  IItem,
  IShipmentSpecialItems,
  TShipmentCategory,
  TSpecialItemHandles,
} from '../../../types/all';
import FormIntro from '../components/FormIntro';
import antique from '../../../assets/Antique.svg';
import collections from '../../../assets/collections.svg';
import art from '../../../assets/art.svg';
import instruments from '../../../assets/intsruments.svg';
import otherItems from '../../../assets/otheritems.svg';
import SpecialObjectsFirst from './SpecialObjectsSteps/SpecialObjectsFirst';
import SpecialObjectsSecond from './SpecialObjectsSteps/SpecialObjectsSecond';

export interface IStepData {
  id: number;
  handle: TSpecialItemHandles;
  title: string;
  description: string;
  image: string;
  examples: string[];
}

const stepData: IStepData[] = [
  {
    id: 1,
    handle: 'antique',
    title: 'Antique',
    description:
      'Antique typically refers to objects, furniture, or works of art that are old and valuable due to their age and historical significance. Generally, items are considered antiques if they are at least 100 years old',
    image: antique,
    examples: ['Victorian furniture', 'Porcelain China', 'Jukeboxes', 'Quilts'],
  },
  {
    id: 2,
    handle: 'collections',
    title: 'Collection',
    description:
      'with collections we mean expensive collections or collections that have a lot of sentimental value. for instance a Gucci bag collection or a gemstone collection that you collected',
    image: collections,
    examples: [
      'Lego collection',
      'Rolex Collection',
      'Jewelry Collection',
      'Wine Collections',
    ],
  },
  {
    id: 3,
    handle: 'art',
    title: 'Art',
    description:
      "With are we mean things people created to express their feelings, ideas, or imagination. It can be a drawing, painting, music, dance, or anything that shows their creativity. It's a way of communicating without words",
    image: art,
    examples: ['Paintings', 'Expensive statues', 'Ceramics', 'Posters'],
  },
  {
    id: 4,
    handle: 'instruments',
    title: 'Instruments',
    description:
      'With Instruments we mean tools or devices designed for creating music. They come in various shapes and sizes, and each produces distinctive sounds. The bigger the instrument the harder it is to move them. ',
    image: instruments,
    examples: ['Guitar', 'Piano', 'Harp', 'Drums'],
  },
  {
    id: 5,
    handle: 'other',
    title: 'Other items',
    description:
      "If there are other items you'd like to include for insurance registration that we haven't discussed yet, please take a moment to think about this. Your input is valuable in ensuring a thorough and accurate registration process.",
    image: otherItems,
    examples: ['Aquarium', 'Terrarium', 'Sports gear', 'Vehicles'],
  },
];

const SpecialObjects: FC<IFormStep> = ({ updateFormData, formData }) => {
  const [step, setStep] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [activeHandles, setActiveHandles] = useState<string[]>([]);

  useEffect(() => {
    if (finished) {
      const newActiveHandles = Object.keys(formData.specialItems).filter(
        (object) => {
          if (
            formData.specialItems[object as keyof IShipmentSpecialItems].active
          ) {
            return object;
          }
        }
      );

      setActiveHandles(newActiveHandles);
    }
  }, [finished]);

  const hasSpecialItems = (
    specialItemHandle: TSpecialItemHandles,
    choice: boolean
  ) => {
    updateFormData('specialItems', {
      [specialItemHandle]: {
        active: choice,
        items: formData.specialItems[specialItemHandle].items,
      },
    });

    handleStep(step + 1);
  };

  const setSpecialItems = (
    specialItemHandle: TSpecialItemHandles,
    item: IItem
  ) => {
    updateFormData('specialItems', {
      [specialItemHandle]: {
        items: [...formData.specialItems[specialItemHandle].items, item],
      },
    });
  };

  const removeSpecialItems = (
    specialItemHandle: TSpecialItemHandles,
    name: string
  ) => {
    const itemIndex = formData.specialItems[specialItemHandle].items.findIndex(
      (itemIndex) => itemIndex.name == name
    );

    updateFormData('specialItems', {
      [specialItemHandle]: {
        items: formData.specialItems[specialItemHandle].items.splice(
          itemIndex,
          1
        ),
      },
    });
  };

  const handleStep = (newStep: number) => {
    if (newStep < 5) {
      setStep(newStep);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      <FormIntro
        heading={
          !finished
            ? 'Do you have any special items we should know off?'
            : 'What are your special items? list them down below'
        }
      />

      {!finished && (
        <SpecialObjectsFirst
          stepData={stepData[step]}
          hasSpecialItems={hasSpecialItems}
        />
      )}

      {finished && (
        <SpecialObjectsSecond
          activeHandles={activeHandles}
          setSpecialItems={setSpecialItems}
          removeSpecialItems={removeSpecialItems}
        />
      )}
    </div>
  );
};

export default SpecialObjects;
