import { useState } from 'react';
import { familyData, housingData } from '../Form';
import FormIntro from '../components/FormIntro';
import FormInput from '../components/FormInput';
import FormSelector from '../components/FormSelector';
import FormFaq from '../components/FormFaq';

const ValueEstimate = () => {
  const [selectedHouse, setSelectedDiv] = useState(Number);
  const [selectedFamily, setSelectedFamily] = useState(Number);

  const handleHouseClick = (id: number) => {
    setSelectedDiv(id);
  };

  const handleFamilyClick = (id: number) => {
    setSelectedFamily(id);
  };

  return (
    <div>
      <FormIntro
        heading="Don't worry we will help you calculate!"
        subheading="What is your living situation like?"
      />
      <div className="flex flex-wrap -mx-3 py-5 justify-center">
        <FormInput
          label="Can you tell us the country you are moving from?"
          placeholder="Netherlands"
        />
      </div>
      <div className="flex flex-wrap items-start ">
        {/* <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          House tpye
        </label> */}
        <div className="w-full flex flex-wrap justify-center gap-[24px] py-5 cursor-pointer">
          {housingData.map((housingDataItem) => {
            return (
              <FormSelector
                data={housingDataItem}
                onClick={handleHouseClick}
                selectedItem={selectedHouse}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 py-5 justify-center">
        <FormInput
          label="Can you give us a estimate of the m² of your house?"
          placeholder="120 m²"
        />
      </div>
      <div className="w-full flex flex-wrap justify-center gap-[24px] py-5 cursor-pointer">
        {familyData.map((familyDataItem) => {
          return (
            <FormSelector
              data={familyDataItem}
              onClick={handleFamilyClick}
              selectedItem={selectedFamily}
            />
          );
        })}
      </div>
      <h1 className="text-3xl text-center mx-auto mt-[48px] mb-[48px] font-spoof w-2/3">
        Based on your given information we estimate your house hold effects are
        worth
      </h1>

      <div className="relative mb-16 w-[1032px] mx-auto">
        <label
          htmlFor="large-range"
          className="block mb-6 text-3xl font-medium text-blue text-center"
        >
          € 15000,-
        </label>
        <input
          id="large-range"
          type="range"
          value="800"
          min="100"
          max="1500"
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
      <span className='text-pink text-center w-full px-24 block m-auto text-xl'>
        Adjust the slider accordingly if you think it should be more or less. be aware that underinsuring 
        means that the full amount cannot be paid out since it’s lower than the estimated value
      </span>
      <h2 className=' font-spoof text-blue text-3xl pt-[72px] text-center'>Having trouble deciding?</h2>
      <h3 className=' font-spoof text-black text-xl pt-[24px] text-center'>Don't worry here are some tips 
that could help!</h3>
        <div>
          <ul className='w-1/3 mx-auto mt-8 rounded-xl'>
              <FormFaq title={'Had contact with your mover already?'} content={'Have you had contact with a mover already and do you know your m³ / ft³ ?'}  />
              <FormFaq title={'Have you looked at your Home contents insurance?'} content={'Your home right now probably has a home contents insurance this is also based on the value of your household contents. This could give you a estimate of how much your stuff is worth '}  />
              <FormFaq title={'Need help?'} content={'Don’t worry. We understand it can be difficult to estimate how much your stuff is worth. We are here for you. Call the number below to speak to an expert or plan a meeting with an proffesional.'}  footer={`<p>Test</p>`}/>
          </ul>
        </div>
    </div>
  );
};

export default ValueEstimate;
