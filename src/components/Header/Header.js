import { NavLink } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '#' },
  { label: 'Menu', to: '#' },
  { label: 'Reservations', to: '/reservations' },
  { label: 'Order Online', to: '#' },
  { label: 'Login', to: '#' },
];

function Header() {
  return (
    <div className="header">
      <img src="/assets/logo.svg" alt="little lemon logo" />
      <nav>
        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <NavLink to={navLink.to}>{navLink.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
