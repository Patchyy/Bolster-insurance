import FormLayout from '../layouts/FormLayout';
import { useState } from 'react';
import Form from '../components/form/Form';

const FormPage = () => {
  const [step, setStep] = useState<number>(1);

  const changeStep = (newStep: number) => {
    setStep(newStep);
  };

  return (
    <div>
      <div id="formulier" className="bg-white-off h-screen">
     
      <div className="header bg-blue-dark w-full h-56 z-0 flex flex-row items-center justify-center">
      <ol className="flex items-center w-1/2 relative">
     
    <li className="flex w-full items-center  justify-center  relative after:content-[''] after:w-full after:h-1 after:border-b after:border-pink after:border-4 after:inline-block">
        <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full lg:h-16 lg:w-16  shrink-0 text-black text-2xl font-bold">
            1
        </span>
        <span className="text-white absolute -top-1/2  text-center">Value estimate</span>
    </li>
   
    <li className="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-pink after:border-4 after:inline-block ">
        <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full lg:h-16 lg:w-16  shrink-0 text-2xl font-bold">
            2
        </span>
        <span className="text-white absolute -top-1/2 -translate-x-1/2 text-center">Additonal info</span>
    </li>
    <li className="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-pink after:border-4 after:inline-block ">
        <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full lg:h-16 lg:w-16  shrink-0 text-2xl font-bold">
            3
        </span>
        <span className="text-white absolute -top-1/2 -translate-x-1/2 text-center">special objects</span>
    </li>
    <li className="flex items-center justify-center">
        <span className="flex items-center text-2xl font-bold justify-center w-10 h-10 bg-white rounded-full lg:h-16 lg:w-16  shrink-0">
            4
        </span>
        <span className="text-white absolute -top-1/2  text-center">Insurance</span>
    </li>
</ol>
      </div>
      <div className="xl:container md:mx-auto bg-white h-screen">
   
        
      </div>
    </div>
    </div>
  );
};

export default FormPage;
