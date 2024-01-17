import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <div id="btn-container">
        <button className="btn-primary">
          <Link to={`/formulier`}>Calculate</Link>
        </button>
        <Link to={`/dashboard`}>Dashboard</Link>
      </div>
    </>
  );
};

export default Homepage;
