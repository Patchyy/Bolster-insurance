import { FC } from 'react';

interface IFormIntro {
  heading: string;
  subheading?: string;
}

const FormIntro: FC<IFormIntro> = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col w-full h-auto">
      <h1 className="text-4xl text-center pt-[54px] font-spoof font-bold ">
        {heading}
      </h1>
      {subheading && (
        <h2 className="text-3xl text-center mt-[48px] mb-[48px] font-spoof">
          {subheading}
        </h2>
      )}
    </div>
  );
};

export default FormIntro;
