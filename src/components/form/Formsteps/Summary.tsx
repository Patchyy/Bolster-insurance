import { FC } from "react";
import { IShipment } from "../../../types/all";
import Button from "../../Button";

interface ISummary {
  submitForm: () => void;
  formData: IShipment;
}

const Summary: FC<ISummary> = ({ submitForm, formData }) => {
  return (
    <div>
      <Button type="pink" text="Submit" onClick={submitForm} />
    </div>
  );
};

export default Summary;
