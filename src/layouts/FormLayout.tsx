import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IFormLayout {
  step: number;
  children: JSX.Element;
}

const formSteps: string[] = [
  'Value estimate',
  'Additional info',
  'Special objects',
  'Insurances',
];

const FormLayout: FC<IFormLayout> = ({ step, children }) => {
  return (
    <>
      <header className="header pt-[70px] pb-[140px] bg-blue-dark w-full flex items-center justify-center">
        <ul
          id="header-stepper"
          className="relative flex items-center w-fit gap-24 z-10"
        >
          {formSteps.map((formStep, index) => {
            return (
              <li className="relative z-10 flex justify-center items-center flex-col">
                <p className="text-white font-semibold mb-4">{formStep}</p>
                <div
                  className={classNames({
                    'flex items-center justify-center w-24 h-24 rounded-full shrink-0  text-2xl font-bold bg-white text-black':
                      true,
                    '!bg-blue !text-white': index + 1 == step,
                    '!bg-green !text-white': index + 1 < step,
                  })}
                >
                  {index + 1}
                </div>
              </li>
            );
          })}
        </ul>
      </header>
      <main className="bg-white-off">
        <div className="relative top-[-70px] container px-[144px] mx-auto bg-white h-auto">
          {children}

          {/* <div className="w-full px-6 py-20">
        <div className="">
          <button onClick={() => changeStep(step - 1)}>Omlaag</button>
          <button onClick={() => changeStep(step + 1)}>Omhoog</button>
        </div>
        </div> */}
        </div>
      </main>
    </>
  );
};

export default FormLayout;
