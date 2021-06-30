import './header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo"></Link>
      <strong>Todo App</strong>
    </header>
  );
};
