import FormLayout from '../layouts/FormLayout';
import { useState } from 'react';
import Form from '../components/form/Form';

const FormPage = () => {
  const [step, setStep] = useState<number>(1);

  const changeStep = (newStep: number) => {
    setStep(newStep);
  };

  return (
    <FormLayout step={step}>
      <Form step={step} changeStep={changeStep} />
    </FormLayout>
  );
};

export default FormPage;
