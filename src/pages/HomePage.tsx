import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import banner from '../assets/banner.png';
import insuranceimg from '../assets/Bolster-3.png';

const Homepage = () => {
  const navigate = useNavigate();

  const navigater = () => {
    navigate('/formulier');
  };

  return (
    <>
      <img src={banner} alt="banner" className="w-full h-auto" />
      <div className="container mx-auto">
        <div className="w-full flex items-center py-40">
          <div className="flex flex-col w-1/2 justify-center">
            <h2 className="text-2xl py-2 font-spoof">Create an insurance</h2>
            <p className="w-[420px] py-4">
              This site is for accredited moving companies and we can help you
              find one regardless of where you live. We work with the very best
              and can provide some obligation-free recommendations. Just ask!
            </p>
            <Button type="blue" text="Create insurance" onClick={navigater} />
          </div>
          <div className="flex flex-col w-1/2 items-center">
            <img src={insuranceimg} alt="banner" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
