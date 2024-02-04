import { FC, useState } from "react";
import { IItem, TSpecialItemHandles } from "../../../types/all";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormDropdown from "./FormDropdown";
import Button from "../../Button";

interface IFormAddItem {
  createSpecialItems: (item: IItem) => void;
  selectedCategorie: string;
  nextId: number;
}

const FormAddItem: FC<IFormAddItem> = ({
  createSpecialItems,
  selectedCategorie,
  nextId,
}) => {
  const [formData, setFormData] = useState<Partial<IItem>>({
    id: undefined,
    name: undefined,
    description: undefined,
    replacemenValue: {
      value: 0,
      valuta: "eur",
    },
    condition: "Very good condition",
    purchaseYear: undefined,
    type: undefined,
  });

  const createItem = () => {
    const newItem: any = {
      ...formData,
      id: nextId,
      type: selectedCategorie as TSpecialItemHandles,
    };

    createSpecialItems(newItem);
  };

  const handleFormData = (
    category:
      | "id"
      | "name"
      | "description"
      | "replacemenValue"
      | "condition"
      | "purchaseYear"
      | "type",
    newData: any
  ) => {
    let newFormData;
    if (category !== "replacemenValue") {
      newFormData = {
        ...formData,
        ...newData,
      };
    } else {
      newFormData = {
        ...formData,
        replacemenValue: {
          valuta: "eur",
          ...newData,
        },
      };
    }

    setFormData(newFormData);
  };

  return (
    <>
      <FormInput
        name="name"
        category="name"
        label="Item name"
        placeholder="Antique chair"
        updateFormData={handleFormData}
      />
      <FormTextarea
        name="description"
        category="description"
        label="Description"
        placeholder="example"
        updateFormData={handleFormData}
      />
      <FormInput
        name="value"
        category="replacemenValue"
        label="Replacement value at destination"
        placeholder="example"
        updateFormData={handleFormData}
      />

      <FormDropdown
        name="condition"
        category="conditions"
        label="Item condition"
        placeholder="select the condition"
        updateFormData={handleFormData}
        data={[
          {
            id: 0,
            title: "Perfect Condition",
          },
          {
            id: 1,
            title: "Very good condition",
          },
          {
            id: 2,
            title: "Good condition",
          },
          {
            id: 3,
            title: "Average condition",
          },
          {
            id: 4,
            title: "Bad condition",
          },
        ]}
      />
      <FormInput
        name="purchaseYear"
        category="purchaseYear"
        label="Year of purchase"
        placeholder="example"
        updateFormData={handleFormData}
      />
      <Button type="pink" text="Add item" onClick={createItem} />
    </>
  );
};

export default FormAddItem;
