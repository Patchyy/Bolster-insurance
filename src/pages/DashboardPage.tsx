import { Link } from 'react-router-dom';

const dashboard = () => {
  return (
    <div id="shipmentdetail">
      <nav>
        <ul>
          <li>
            <Link to={`/dashboard/1`}>Your Name</Link>
          </li>
          <li>
            <Link to={`/dashboard/2`}>Your Friend</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default dashboard;
