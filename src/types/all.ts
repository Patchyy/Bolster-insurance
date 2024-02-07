export interface IValue {
  value: number;
  valuta: string;
}

export interface IItem {
  id: number;
  name: string;
  description: string;
  replacemenValue: IValue;
  condition: string;
  purchaseYear: number;
  type: TSpecialItemHandles;
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

export type TSpecialItemHandles =
  | 'Antique'
  | 'Collections'
  | 'Art'
  | 'Instruments'
  | 'Other';

export type IShipmentSpecialItems = IItem[];

export interface IShipmentPackage {
  packageName: string;
  subname: string;
  value: IValue;
  included: string[];
  extraOptions?: string[];
  ourAdvice?: boolean;
}

export type TShipmentCategoryData =
  | IShipmentOrigin
  | IShipmentDestination
  | IShipmentFamily
  | IShipmentMovingCompany
  | IShipmentSpecialItems
  | IShipmentPackage;

export interface IShipmentClaims {
  id: number;
  title: string;
  value: string;
  damage: string;
  status: string;
}

export type TShipmentCategory =
  | 'origin'
  | 'destination'
  | 'family'
  | 'movingCompany'
  | 'specialItems'
  | 'package'
  | 'claims';

export interface IShipment {
  id?: number;
  origin: IShipmentOrigin;
  destination: IShipmentDestination;
  family: IShipmentFamily;
  movingCompany: IShipmentMovingCompany;
  specialItems: IShipmentSpecialItems;
  package: IShipmentPackage;
  claims: IShipmentClaims[];
}

export type TUpdateFormData = (category: any, newData: any) => void;

export interface IFormStep {
  updateFormData: TUpdateFormData;
  formData: IShipment;
}

export const InsuranceData: IShipmentPackage[] = [
  {
    packageName: 'Bronze',
    subname: 'Shipment lost',
    value: { value: 375, valuta: 'EUR' }, // Hier een voorbeeld van een IValue instantie
    included: ['Total shipment lost', 'Fair market value'],
    extraOptions: [],
  },
  {
    packageName: 'Silver',
    subname: 'Choose your option',
    value: { value: 825, valuta: 'EUR' }, // Hier een voorbeeld van een IValue instantie
    included: ['Bronze coverage', 'Partial loss'],
    extraOptions: [
      ' In case of total loss/missing, partial loss: new for old ',
      ' SIT 60 Days',
      'Electrical derangement',
      'Mechanical derangement',
      'Mould & Mildew max 15% coverage',
      'Pairs & Sets',
      'Removal costs',
    ],
  },
  {
    packageName: 'gold',
    subname: 'Like & kind replacement',
    value: { value: 1.125, valuta: 'EUR' }, // Hier een voorbeeld van een IValue instantie
    included: [
      'Silver coverage',
      'In case of total loss/missing partial loss for items younger than 12 months: new for old',
      'In case of partial loss: repair costs, actual repair or depreciation',
      'SIT 120 days',
      'Electrical & mechanical derangement',
      'Mould & Mildew 30% coverage',
      'Pair & sets',
    ],
    extraOptions: [
      'Removal costs',
      // Voeg hier je extra opties toe
    ],
    ourAdvice: true,
  },
  {
    packageName: 'Platinum',
    subname: 'New for old',
    value: { value: 1.425, valuta: 'EUR' }, // Hier een voorbeeld van een IValue instantie
    included: [
      'Gold coverage',
      'In case of total loss/missing partial loss for items younger than 36 months: new for old',
      'In case of partial loss: repair costs, actual repair or deprecation',
      'Mould & Mildew 100% insured value',
    ],
    extraOptions: [
      'Removal costs',
      // Voeg hier je extra opties toe
    ],
  },
];
