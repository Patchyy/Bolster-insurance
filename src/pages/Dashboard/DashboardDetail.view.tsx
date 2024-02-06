import { useEffect, useState } from "react";
import { IShipment, IShipmentClaims } from "../../types/all";
import { useParams } from "react-router";
import Button from "../../components/Button";
import FormInput from "../../components/form/components/FormInput";
import FormDropdown from "../../components/form/components/FormDropdown";

const DashboardDetailPage = () => {
  const [shipment, setShipment] = useState<IShipment | null>(null);
  const [showClaimForm, setShowClaimForm] = useState<boolean>(false);
  const [claims, setClaims] = useState<IShipmentClaims[]>([]);
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
  }, [params.shipmentId]);

  useEffect(() => {
    console.log("Shipments:", shipment);
  }, [shipment]);

  const handleShowClaimForm = (value: boolean) => {
    setShowClaimForm(value);
  };

  const addClaim = () => {
    const claim = {
      id: 1,
      title: "",
      value: "",
      damage: "Rotten",
      status: "Pending",
    };

    console.log(claim);

    setClaims([claim]);
    setShowClaimForm(false);
  };

  return (
    <div id="shipments" className="bg-white-off h-screen">
      <div className="header bg-blue-dark w-full h-56 z-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Your shipment</h1>
        <p className="text-white">See the specific details of your shipment</p>
      </div>
      <div className="xl:container md:mx-auto bg-white h-screen">
        {!showClaimForm ? (
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
              <div className="flex flex-col gap-20 overflow-x-auto py-3">
                <table className="w-5\/12 text-sm text-left rtl:text-right text-black">
                  <caption className="bg-blue text-left text-white font-medium text-l px-6 py-2 rounded-t-lg">
                    Special objects
                  </caption>
                  <thead className="bg-white text-xs text-black uppercase  ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Replacement value
                      </th>
                      <th scope="col" className="px-6 py-3">
                        State
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Doc
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipment?.specialItems.map((specialItem) => {
                      return (
                        <tr
                          className="bg-white-off border-b "
                          key={specialItem.id}
                        >
                          <td className="px-6 py-4 whitespace-nowrap ">
                            {specialItem.name}
                          </td>
                          <td className="px-6 py-4">
                            {specialItem.replacemenValue.valuta === "eur"}{" "}
                            {"€ "}
                            {specialItem.replacemenValue.value}
                          </td>
                          <td className="px-6 py-4">{specialItem.condition}</td>
                          <td className="px-6 py-4">3</td>
                          <td className="px-6 py-4 ">
                            {specialItem.description}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <table className="w-5\/12 text-sm text-left rtl:text-right text-black">
                  <caption className="bg-blue text-left text-white font-medium text-l px-6 py-2 rounded-t-lg">
                    Claims
                  </caption>
                  <thead className="bg-white text-xs text-black uppercase  ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Replacement value
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Damage
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Doc
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {claims.length ? (
                      claims.map((specialItem) => {
                        return (
                          <tr
                            className="bg-white-off border-b "
                            key={specialItem.id}
                          >
                            <td className="px-6 py-4 whitespace-nowrap ">
                              {specialItem.title}
                            </td>
                            <td className="px-6 py-4">€ {specialItem.value}</td>
                            <td className="px-6 py-4">{specialItem.damage}</td>
                            <td className="px-6 py-4">3</td>
                            <td className="px-6 py-4 ">{specialItem.status}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <div className="flex flex-col justify-center items-center w-full h-auto">
                        <p>No claims yet!</p>
                        <p>
                          Anything broken? Press the button down below to file a
                          claim
                        </p>
                        <Button
                          type="blue"
                          text="File a claim"
                          onClick={() => handleShowClaimForm(true)}
                        />
                      </div>
                    )}
                  </tbody>
                  {!claims.length ? (
                    <></>
                  ) : (
                    <div className="mt-10">
                      <Button
                        type="blue"
                        text="File a claim"
                        onClick={() => handleShowClaimForm(true)}
                      />
                    </div>
                  )}
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full h-auto">
            <div className="text-center w-full h-auto mb-10 mt-5">
              <h2>Your claim</h2>
              <p className="max-w-[300px] mx-auto">
                Fill in the form below and we will look into your claim
                depending on the type of claim it is approval can vary from 1 to
                2 weeks.
              </p>
            </div>
            <form className="flex flex-col w-full h-auto gap-5">
              <div className="">
                <FormDropdown
                  name="condition"
                  category="conditions"
                  label="Item condition"
                  placeholder="select the condition"
                  data={[
                    {
                      id: 0,
                      title: "Perfect Condition",
                    },
                    {
                      id: 1,
                      title: "Very good condition",
                    },
                    {
                      id: 2,
                      title: "Good condition",
                    },
                    {
                      id: 3,
                      title: "Average condition",
                    },
                    {
                      id: 4,
                      title: "Bad condition",
                    },
                  ]}
                />
              </div>
              <div className="">
                <FormInput
                  name="value"
                  category="replacemenValue"
                  label="Replacement value at destination"
                  placeholder="example"
                />
              </div>
              <div className="">
                <FormInput
                  name="value"
                  category="replacemenValue"
                  label="Replacement value at destination"
                  placeholder="example"
                />
              </div>
              <div className="">
                <FormDropdown
                  name="condition"
                  category="conditions"
                  label="Item condition"
                  placeholder="select the condition"
                  data={[
                    {
                      id: 0,
                      title: "Perfect Condition",
                    },
                    {
                      id: 1,
                      title: "Very good condition",
                    },
                    {
                      id: 2,
                      title: "Good condition",
                    },
                    {
                      id: 3,
                      title: "Average condition",
                    },
                    {
                      id: 4,
                      title: "Bad condition",
                    },
                  ]}
                />
              </div>
              <div className="">
                <FormInput
                  name="value"
                  category="replacemenValue"
                  label="Replacement value at destination"
                  placeholder="example"
                />
              </div>
            </form>
            <div className="flex justify-between items-center w-full h-auto mt-40">
              <Button
                type="pink"
                text="Cancel"
                onClick={() => handleShowClaimForm(false)}
              />
              <Button type="blue" text="Create claim" onClick={addClaim} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardDetailPage;
