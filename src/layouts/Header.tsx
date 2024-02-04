import Button from "../components/Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-auto py-8 px-10 bg-blue-dark">
      <div className="flex items-center w-full h-auto">
        <ul className="flex items-center gap-8 text-white font-bold text-lg">
          <li>Insurances</li>
          <li>Support</li>
          <li>Get Started</li>
          <li>For movers</li>
          <li>For companies</li>
          <li>About</li>
        </ul>
      </div>
      <div className="flex w-auto shrink-0">
        <Button type="white" text="Create insurance" />
      </div>
    </header>
  );
};

export default Header;
