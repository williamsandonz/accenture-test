import './footer.scss';
import { constants } from '@vodafone/common';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <nav className="links">
        <strong>Example links</strong>
        <ul>
          <li>
            <Link to="/">Example link #1</Link>
          </li>
          <li>
            <Link to="/">Example link #2</Link>
          </li>
          <li>
            <Link to="/">Example link #2</Link>
          </li>
        </ul>
      </nav>
      <div className="meta">
        <a className="logo-muted" href="/"></a>
        <small>&copy; {constants.appName} 2021</small>
      </div>
    </footer>
  );
};
