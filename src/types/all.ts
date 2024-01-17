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

export interface IShipment {
  id: number;
  origin: {
    country: string;
    zip: string;
    city: string;
    street: string;
    housenumber: string;
    addition: string;
    house: string;
    value: IValue;
  };
  destination: {
    country: string;
    zip: string;
    city: string;
    street: string;
    housenumber: string;
    addition: string;
    house: string;
  };
  family: {
    adults: number;
    children: number;
    baby: number;
  };
  movingCompany: string;
  specialItems: [
    {
      antique: ICategory;
      collections: ICategory;
      art: ICategory;
      instruments: ICategory;
      other: ICategory;
    }
  ];
  package: {
    chosenPackge: string;
    value: IValue;
  };
}
