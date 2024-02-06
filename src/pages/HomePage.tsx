import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import banner from "../assets/banner.png";

const Homepage = () => {
  const navigate = useNavigate();

  const navigater = () => {
    navigate("/formulier");
  };

  return (
    <>
      <img src={banner} alt="banner" className="w-full h-auto" />
      <div className="container mx-auto">
        <div className="w-full flex items-center py-40">
          <div className="flex flex-col w-1/2 justify-center">
            <h2>Create an insurance</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quod fugiat unde fugit cum sapiente veritatis, quos
              ducimus dolorum eius facilis vel, molestiae minus adipisci
              suscipit cupiditate! Veritatis porro saepe accusantium aut. Velit
              tenetur error dignissimos, deserunt cum totam, distinctio ab aut
              non quae eaque. Vero magnam perspiciatis totam libero!
            </p>
            <Button type="blue" text="Create insurance" onClick={navigater} />
          </div>
          <div className="flex flex-col w-1/2 items-center">
            <img src={banner} alt="banner" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
