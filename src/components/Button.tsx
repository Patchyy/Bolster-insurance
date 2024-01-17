import { FC } from 'react';

interface IButton {
  type: string;
  onClick?: () => void;
  children: JSX.Element;
}

const Button: FC<IButton> = ({ type, onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
