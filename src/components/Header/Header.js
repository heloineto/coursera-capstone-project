import { useState } from 'react';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-white">
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
        <div className="block lg:hidden">
          <button
            className="w-8 h-8"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <img src="/assets/hamburger-menu.svg" alt="hamburger menu" />
          </button>
          {mobileOpen ? (
            <div className="absolute z-50 top-[100px] left-0 w-full bg-white py-4">
              <ul className="flex flex-col items-center gap-4">
                {navLinks.map((navLink) => (
                  <li key={navLink.label}>
                    <NavLink
                      className="text-[#333333] text-[24px] font-bold hover:text-[#f9d8cb]"
                      to={navLink.to}
                    >
                      {navLink.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
