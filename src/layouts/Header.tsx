const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-auto py-8 px-10 bg-blue-dark">
      <div className="flex items-center gap-8 w-full h-auto">
        <div className="">
          <a href="/">
            <img
              src="https://www.bolsterinsurance.com/assets/bolster/img/bolster-logo.svg"
              alt="Bolster logo"
              className="w-[150px]"
            />
          </a>
        </div>
        <ul className="flex items-center gap-8 text-white font-bold text-lg">
          <li>Insurances</li>
          <li>Support</li>
          <li>Get Started</li>
          <li>For movers</li>
          <li>For companies</li>
          <li>About</li>
        </ul>
      </div>
      <div className="flex items-center w-auto shrink-0 gap-5">
        <a
          href="/dashboard"
          className="text-white hover:text-pinkhover font-bold"
        >
          Dashboard
        </a>
      </div>
    </header>
  );
};

export default Header;
