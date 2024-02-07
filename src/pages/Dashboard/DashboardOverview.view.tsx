import { useEffect, useState } from 'react';
import { IShipment } from '../../types/all';
import { Link } from 'react-router-dom';
import phone from '../../assets/phone.svg';
import calander from '../../assets/Calendar.svg';

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

  return (
    <div id="shipments" className="bg-white-off h-screen">
      <div className="header bg-blue-dark w-full h-56 z-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white relative top-[-40px]">
          Dashboard
        </h1>
        <p className="text-white relative top-[-30px]">
          Welcome on your dashboard environment
        </p>
      </div>
      <div className="xl:container md:mx-auto bg-white h-screen relative top-[-70px]">
        <div className="flex justify-center ">
          <div className="basis-5/12  mt-12 px-20 py-3 gap-[20px]">
            <h1 className="text-2xl ">In need of personal contact?</h1>
            <p className="py-3">
              No problem we are here for you! Plan a meeting in the calendar
              below and we will help you with all your worries!
            </p>

            <img src={calander} alt="calander" className="py-4" />

            <h2 className="text-xl mt-10">One call away!</h2>
            <p>
              Maybe a phone call is the solution to completely dispel your
              worries. Dial the number below, and watch your concerns fade away.
            </p>
            <div className="flex gap-6 py-2">
              <img src={phone} alt="phone"></img>
              <span className="text-blue font-bold font-roboto text-lg">
                0 2 0 - 2 4 4 5 6 6 2
              </span>
            </div>
          </div>
          <div className="basis-6/12 mt-16 w-fit">
            <div className="flex flex-col gap-20 overflow-x-auto py-3">
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
                          <Link to={`/dashboard/overview/${shipment.id}`}>
                            Click to show
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <table className="w-5\/12 text-sm text-left rtl:text-right text-black">
                <caption className="bg-blue text-left text-white font-medium text-l px-6 py-2 rounded-t-lg">
                  Storage
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
                  <tr>
                    <td colSpan={5} className="text-center">
                      No storage has been set.
                    </td>
                  </tr>
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
