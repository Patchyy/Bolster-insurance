import { FC, useEffect, useState } from 'react';
import { TShipmentCategory, TUpdateFormData } from '../../../types/all';

interface IFormSlider {
  name: string;
  category: TShipmentCategory;
  min: number;
  max: number;
  step: number;
  initialValue: number;
  value: number;
  valuta: string;
  updateFormData: TUpdateFormData;
}

const FormSlider: FC<IFormSlider> = ({
  name,
  category,
  min,
  max,
  step,
  value,
  valuta,
  updateFormData,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    setCurrentValue(value == 0 ? (max + min) / 2 : value);
  }, [min, max, value]);

  const updateValue = (newValue: number) => {
    setCurrentValue(newValue);

    updateFormData(category, {
      [name]: { value: newValue, valuta: valuta },
    });
  };

  return (
    <div className="relative mb-16 w-[1032px] mx-auto">
      <label
        htmlFor="large-range"
        className="block mb-6 text-3xl font-medium text-blue text-center"
      >
        € {currentValue},-
      </label>
      <input
        id="large-range"
        type="range"
        value={currentValue}
        min={min}
        max={max}
        step={step}
        name={name}
        onChange={(event) => updateValue(parseInt(event.target.value))}
        className="w-full h-4 bg-white-off rounded-lg appearance-none cursor-pointer range-lg "
      />
      <span className="text-xl text-black absolute start-0 -bottom-10">
        Less
      </span>
      <span className="text-xl text-black  absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-10">
        Our estimate
      </span>
      <span className="text-xl text-black  absolute end-0 -bottom-10">
        More
      </span>
    </div>
  );
};

export default FormSlider;
