import { NavLink } from 'react-router-dom';

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
    <div className="flex px-4 lg:px-0 lg:mx-auto lg:w-[858px] h-[123px] items-center justify-between">
      <img
        className="w-[202px] h-[76px]"
        src="/assets/logo.svg"
        alt="little lemon logo"
      />
      <nav className="hidden lg:block">
        <ul className="flex font-medium text-xl gap-[28px]">
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
