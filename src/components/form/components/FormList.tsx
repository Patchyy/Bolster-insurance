import { FC } from "react";
import listimg from "../../../assets/Bolster_Logo_Color.svg";

interface IFormList {
  listItem: string;
}

const FormList: FC<IFormList> = ({ listItem }) => {
  return (
    <li className="flex items-center">
      <img
        className="w-[20px] h-[30px] me-2 text-green-500 dark:text-green-400 flex-shrink-0 item"
        src={listimg}
        alt="Displaying something"
      ></img>
      {listItem}
    </li>
  );
};

export default FormList;
