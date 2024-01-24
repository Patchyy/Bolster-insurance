interface IValue {
  value: number;
  valuta: string;
}

interface ICategory {
  active: boolean;
  items: IItem[];
}

interface IItem {
  id: number;
  name: string;
  description: string;
  replacemenIValue: IValue;
  condition: string;
  purchaseYear: number;
}

interface IShipmentOrigin {
  country: string;
  size: number;
  zip: string;
  city: string;
  street: string;
  housenumber: string;
  addition: string;
  house: number | null;
  value: IValue;
}

interface IShipmentDestination {
  country: string;
  zip: string;
  city: string;
  street: string;
  housenumber: string;
  addition: string;
  house: number | null;
}

interface IShipmentFamily {
  adults: number;
  children: number;
  baby: number;
}

type IShipmentMovingCompany = string;

interface IShipmentSpecialItems {
  antique: ICategory;
  collections: ICategory;
  art: ICategory;
  instruments: ICategory;
  other: ICategory;
}

interface IShipmentPackage {
  chosenPackge: string;
  value: IValue;
}

export type TShipmentCategoryData =
  | IShipmentOrigin
  | IShipmentDestination
  | IShipmentFamily
  | IShipmentMovingCompany
  | IShipmentSpecialItems
  | IShipmentPackage;

export type TShipmentCategory =
  | 'origin'
  | 'destination'
  | 'family'
  | 'movingCompany'
  | 'specialItems'
  | 'package';

export interface IShipment {
  id?: number;
  origin: IShipmentOrigin;
  destination: IShipmentDestination;
  family: IShipmentFamily;
  movingCompany: IShipmentMovingCompany;
  specialItems: IShipmentSpecialItems;
  package: IShipmentPackage;
}

export type TUpdateFormData = (
  category: TShipmentCategory,
  newData: any
) => void;

export interface IFormStep {
  updateFormData: TUpdateFormData;
  formData: IShipment;
}
