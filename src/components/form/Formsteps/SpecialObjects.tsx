import { FC } from 'react';
import { IFormStep } from '../../../types/all';
import FormIntro from '../components/FormIntro';
import antique from '../../../assets/Antique.svg'
import Button from '../../Button';

const SpecialObjects: FC<IFormStep> = () => {
  return (
    <div>
      <FormIntro heading={'Do you have any special items we should know off?'}/>
      <div className='flex justify-center pt-[40px] gap-[24px] items-center'>
      <div className='flex flex-col w-[504px]'>
      <h2 className='text-3xl pb-2'>Antique</h2>
      <p>Antique typically refers to objects, furniture, or works of art that are old and valuable due to their age and historical significance. Generally, items are considered antiques if they are at least 100 years old</p>
      </div>
      <img src={antique} alt="" />
      
      </div>
      <Button type={''} text={'yes'} />
      <Button type={''} text={'no'} />
    </div>
  );
};

export default SpecialObjects;
