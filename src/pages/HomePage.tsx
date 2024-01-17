import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Homepage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <div id="btn-container">
        <Button type="default" onClick={() => console.log('hoi')}>
          {/* <Link to={`/formulier`}>Calculate</Link> */}
          <p>hoi</p>
        </Button>
        <Link to={`/dashboard`}>Dashboard</Link>
      </div>
    </>
  );
};

export default Homepage;
