import { useEffect, useState } from 'react';
import { IShipment } from '../../types/all';
import { useParams } from 'react-router';

const DashboardDetailPage = () => {
  const [shipment, setShipment] = useState<IShipment | null>(null);
  const params = useParams();

  useEffect(() => {
    const getShipments = async (shipmentId: string) => {
      const res = await fetch(`http://localhost:5000/shipments/${shipmentId}`);
      const data = await res.json();

      setShipment(data);
    };

    const shipmentId = params.shipmentId;

    if (shipmentId) {
      getShipments(shipmentId);
    }
  }, []);

  useEffect(() => {
    console.log('Shipments:', shipment);
  }, [shipment]);

  return (
    <div id="shipments" className="bg-white-off h-[400px]">
      <h1>Details</h1>
      {shipment && <h2>{shipment.movingCompany}</h2>}
    </div>
  );
};

export default DashboardDetailPage;
