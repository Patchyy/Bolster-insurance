import { useEffect, useState } from 'react';
import { IShipment } from '../../types/all';
import { Link } from 'react-router-dom';

const DashboardOverviewPage = () => {
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
      <h1>Overview</h1>
      <Link to="/dashboard/overview/1">Example detail page</Link>

      {/* <div className="header bg-blue-dark w-full h-56"></div>
      <div className="xl:container md:mx-auto bg-white h-full">
        <div className="flex flex-row">
          <div className="basis-4/12">
            <h2 className="px-6 py-3">In need of personal contact?</h2>
          </div>
          <div className="basis-8/12">
            <div className="relative overflow-x-auto">
              <table className="w-5/12 text-sm text-left rtl:text-right text-black columns-6">
                <caption className="bg-blue text-left text-white font-medium text-xl px-6 py-2 rounded-t-lg">
                  Shipments
                </caption>
                <thead className="bg-white text-xs text-black uppercase  ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Origin
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Destination
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Value
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Moving company
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map((shipment) => {
                    return (
                      <tr className="bg-white-off border-b " key={shipment.id}>
                        <td
                          scope="row"
                          className="px-6 py-4 whitespace-nowrap "
                        >
                          {shipment.origin.country}
                        </td>
                        <td className="px-6 py-4">
                          {shipment.destination.country}
                        </td>
                        <td className="px-6 py-4">
                          {shipment.origin.value.value}
                        </td>
                        <td className="px-6 py-4">{shipment.movingCompany}</td>
                        <td className="px-6 py-4 ">
                          {' '}
                          <Link to={`/dashboard/shipmentId`}>GO TO</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardOverviewPage;
