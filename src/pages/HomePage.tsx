import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Homepage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <div id="btn-container">
        <Link to={`/formulier`}>Formulier</Link>
        <p>hoi</p>
      </div>
    </>
  );
};

export default Homepage;
