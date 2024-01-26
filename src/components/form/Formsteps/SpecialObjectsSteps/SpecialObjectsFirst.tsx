import React, { FC } from 'react';
import { IStepData } from '../SpecialObjects';
import FormList from '../../components/FormList';
import Button from '../../../Button';
import { TSpecialItemHandles } from '../../../../types/all';

interface ISpecialObjectsFirst {
  stepData: IStepData;
  HasSpecialItems: (
    specialItemHandle: TSpecialItemHandles,
    choice: boolean
  ) => void;
}

const SpecialObjectsFirst: FC<ISpecialObjectsFirst> = ({
  stepData,
  HasSpecialItems,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center pt-[40px] gap-[24px] items-center">
          <div className="flex flex-col w-[504px]">
            <h2 className="text-3xl pb-2">{stepData.title}</h2>
            <p>{stepData.description}</p>
          </div>
          <img src={stepData.image} alt="" />
        </div>
      </div>
      <div className="flex justify-center  pt-[24px] gap-[152px]">
        <Button
          type="pink"
          text="yes"
          onClick={() => HasSpecialItems(stepData.handle, true)}
        />
        <Button
          type="blue"
          text="no"
          onClick={() => HasSpecialItems(stepData.handle, false)}
        />
      </div>
      <div className="flex flex-col justify-center items-center pt-[56px] ">
        <h2 className="text-xl w-1/2">
          Not sure what we consider a instrument? below are a few examples:
        </h2>

        <ul className="w-1/2 space-y-6 text-black list-inside text-xl pt-[24px] ">
          {stepData.examples.map((example) => {
            return <FormList listItem={example} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default SpecialObjectsFirst;
