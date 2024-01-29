import classNames from 'classnames';
import { FC } from 'react';

interface IButton {
  type: 'pink' | 'blue' | 'green' | 'outline-blue';
  onClick?: () => void;
  // children: JSX.Element;
  text: string;
}

const Button: FC<IButton> = ({ type, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={classNames({
        'font-bold py-2 px-4 rounded-full w-[152px] text-center': true,
        'bg-pink text-white hover:bg-pinkhover': type == 'pink',
        'bg-blue text-white hover:bg-bluehover': type == 'blue',
        'bg-green text-white hover:bg-greenhover': type == 'green',
        'bg-white text-blue border-blue border hover:text-bluehover hover:border-bluehover':
          type == 'outline-blue',
      })}
    >
      {text}
    </button>
  );
};

export default Button;
