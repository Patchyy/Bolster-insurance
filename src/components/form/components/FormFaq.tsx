import { FC } from "react";
import listimg from "../../../assets/Bolster_Logo_Color.svg";

interface IFormFaq {
  title: string;
  content: string;
  footer?: React.ReactElement;
}

const FormFaq: FC<IFormFaq> = ({ title, content, footer }) => {
  return (
    <li>
      <details className="group">
        <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
          <img
            src={listimg}
            alt=""
            className="w-6 h-6 text-gray-500 transition group-open:rotate-90"
          />
          <span className="text-lg">{title}</span>
        </summary>
        <article className="px-4 pb-4">
          <p>{content}</p>
          {footer}
        </article>
      </details>
    </li>
  );
};

export default FormFaq;
