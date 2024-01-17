import { Link } from 'react-router-dom';

const dashboard = () => {
  return (
    <div id="shipmentdetail">
      <nav>
        <ul>
          <li>
            <Link to={`/dashboard/1`}>Shipment 1</Link>
          </li>
          <li>
            <Link to={`/dashboard/2`}>Shipment 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default dashboard;
