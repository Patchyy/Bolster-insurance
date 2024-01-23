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
    <div id="shipments" className="bg-white-off h-screen">
      <div className="header bg-blue-dark w-full h-56 z-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        <p className="text-white">Welkom op je dashboard omgeving!</p>
      </div>
      <div className="xl:container md:mx-auto bg-white h-screen">
        <div className="flex flex-row">
          <div className="basis-5/12  mt-12">
            <h1 className="text-2xl px-20 py-3">
              In need of personal contact?
            </h1>
            <p className="px-20 py-3">
              No problem we are here for you! Plan a meeting in the calendar
              below and we will help you with all your worries!
            </p>
            <div className="bg-white-off mx-20 py-3">
              <p className="text-2xl font-bold px-4">May</p>
            </div>
          </div>
          <div className="basis-6/12 mt-16 w-fit ml-40">
            <div className="overflow-x-auto py-3">
              <table className="w-5\/12 text-sm text-left rtl:text-right text-black">
                <caption className="bg-blue text-left text-white font-medium text-l px-6 py-2 rounded-t-lg">
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
                          {shipment.origin.value.valuta === 'eur'} {'€ '}
                          {shipment.origin.value.value}
                        </td>
                        <td className="px-6 py-4">{shipment.movingCompany}</td>
                        <td className="px-6 py-4 ">
                          <Link to={'/dashboard/overview/' + shipment.id}>
                            Details
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverviewPage;
