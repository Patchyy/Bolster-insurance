import { FC } from 'react';

interface IButton {
  type: string;
  onClick?: () => void;
  // children: JSX.Element;
  text: string;
}

const Button: FC<IButton> = ({ type, onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
