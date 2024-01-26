import classNames from 'classnames';
import { FC } from 'react';

interface IButton {
  type: 'pink' | 'blue' | 'green';
  onClick?: () => void;
  // children: JSX.Element;
  text: string;
}

const Button: FC<IButton> = ({ type, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={classNames({
        'text-white font-bold py-2 px-4 rounded-full w-[152px] text-center':
          true,
        'bg-pink hover:bg-pinkhover': type == 'pink',
        'bg-blue hover:bg-bluehover': type == 'blue',
        'bg-green hover:bg-greenhover': type == 'green',
      })}
    >
      {text}
    </button>
  );
};

export default Button;
