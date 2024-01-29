import React, { FC, useState } from 'react';
import { IStepData } from '../SpecialObjects';
import FormList from '../../components/FormList';
import Button from '../../../Button';
import { IItem, TSpecialItemHandles } from '../../../../types/all';
import FormInput from '../../components/FormInput';
import FormTextarea from '../../components/FormTextarea';
import FormDropdown from '../../components/FormDropdown';
import antique from '../../../../assets/Antique.svg';
import collections from '../../../../assets/collections.svg';
import art from '../../../../assets/art.svg';
import instruments from '../../../../assets/intsruments.svg';
import otherItems from '../../../../assets/otheritems.svg';

interface ISpecialObjectsSecond {
  activeHandles: string[];
  setSpecialItems: (
    specialItemHandle: TSpecialItemHandles,
    item: IItem
  ) => void;
  removeSpecialItems: (
    specialItemHandle: TSpecialItemHandles,
    name: string
  ) => void;
}

const renderCategorie = (
  categorie: string,
  handleItemCategorieClick: (categorie: string) => void
) => {
  let image = '';

  switch (categorie) {
    case 'antique':
      image = antique;
      break;
    case 'collections':
      image = collections;
      break;
    case 'art':
      image = art;
      break;
    case 'instruments':
      image = instruments;
      break;
    case 'other':
      image = otherItems;
      break;
    default:
      // Voeg hier code toe voor het geval categorie niet overeenkomt met een van de cases
      break;
  }

  return (
    <div className="flex flex-col bg-white-off py-[12.5px] px-[12.5px] w-[240px] h-[230px] justify-center items-center rounded-lg">
      <img className="w-[140px] h-[140px]" src={image} alt="" />
      <p>{categorie.toUpperCase()}</p>
      {/* onclick hier */}
    </div>
  );
};

const SpecialObjectsSecond: FC<ISpecialObjectsSecond> = ({
  activeHandles,
  setSpecialItems,
  removeSpecialItems,
}) => {
  const [selectedCategorie, setSelectedCategorie] = useState<string>();

  const handleItemCategorieClick = (categorie: string) => {
    setSelectedCategorie(categorie);
  };
  return (
    <>
      <h2 className=""></h2>
      <div className="flex justify-center pt-[40px] gap-[112px] items-center w-full">
        <div className="flex justify-center flex-col pt-[40px] items-start w-[680px]">
          <h2 className="text-3xl pb-5">Antique</h2>
          <table className="w-5\/12 text-sm text-left rtl:text-right text-black my-6">
            <caption className="bg-blue text-left text-white font-medium text-l px-6 py-2 rounded-t-lg">
              Shipments
            </caption>
            <thead className="bg-white text-xs text-black uppercase  ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Replacment value
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr className="bg-white-off border-b " key={formData.id}>
                <td scope="row" className="px-6 py-4 whitespace-nowrap ">
                  Antique chair
                </td>
                <td className="px-6 py-4">€ 4.5000</td>
                <td className="px-6 py-4">Perfect condition</td>
                <td className="px-6 py-4">Edit</td>
                <td className="px-6 py-4 ">Delete</td>
              </tr> */}
            </tbody>
          </table>
          <div className="flex flex-wrap w-full justify-center py-2">
            <Button
              type="outline-blue"
              text="Add item"
              onClick={() => console.log('werkt')}
            ></Button>
          </div>
          {/* <FormInput
            name="name"
            category="specialItems"
            label="Item name"
            placeholder="Antique chair"
            updateFormData={updateFormData}
          />
          <FormTextarea
            name="description"
            category="specialItems"
            label="Description"
            placeholder="example"
            updateFormData={updateFormData}
          />
          <FormInput
            name="value"
            category="specialItems"
            label="Replacement value at destination"
            placeholder="example"
            updateFormData={updateFormData}
          />

          <FormDropdown
            name="condition"
            category="specialItems"
            label="Item condition"
            placeholder="select the condition"
            updateFormData={updateFormData}
            data={[
              {
                id: 0,
                title: 'Perfect Condition',
              },
              {
                id: 1,
                title: 'Very good condition',
              },
              {
                id: 2,
                title: 'Good condition',
              },
              {
                id: 3,
                title: 'Average condition',
              },
              {
                id: 4,
                title: 'Bad condition',
              },
            ]}
          />
          <FormInput
            name="purchaseYear"
            category="specialItems"
            label="Year of purchase"
            placeholder="example"
            updateFormData={updateFormData}
          /> */}
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-[36px]">
          {activeHandles.map((activeHandle) => {
            return renderCategorie(activeHandle, handleItemCategorieClick);
          })}
        </div>
      </div>
    </>
  );
};

export default SpecialObjectsSecond;
