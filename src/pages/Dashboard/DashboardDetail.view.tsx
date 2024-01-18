import { useEffect, useState } from "react";
import { IShipment } from "../../types/all";

const DashboardDetailPage = () => {
  const [shipments, setShipments] = useState<IShipment[]>([]);

  useEffect(() => {
    const getShipments = async () => {
      const res = await fetch('http://localhost:5000/shipments');
      const data = await res.json();

      setShipments(data);
    };

    getShipments();
  }, []);

  useEffect(() => {
    console.log('Shipments:', shipments);
  }, [shipments]);
  return (
    <div id="shipments" className="bg-white-off h-[400px]">
      <h1>Details</h1>
        
    </div>
  );
};

export default DashboardDetailPage;
