import { NavLink } from 'react-router-dom';

const footerSections = [
  {
    label: 'Navigation',
    links: [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Menu' },
      { label: 'Reservations' },
      { label: 'Order Online' },
      { label: 'Login' },
    ],
  },
  {
    label: 'Contact',
    links: [
      { label: 'Adress' },
      { label: 'Phone number' },
      { label: 'E-mail' },
    ],
  },
  {
    label: 'Social Media',
    links: [
      { label: 'Facebook' },
      { label: 'Instagram' },
      { label: 'Twitter' },
    ],
  },
];

function Footer() {
  return (
    <div className="w-full bg-[#333333] mt-[90px] py-[70px]">
      <footer className="mx-auto w-[858px] flex items-center justify-between">
        <img
          className="w-[200px] h-[80px] flex-shrink-0 object-right rounded-lg"
          src="/assets/logo.svg"
          alt="Little Lemon logo"
        />
        <div className="grid grid-cols-3 gap-[100px] items-center">
          {footerSections.map((section) => (
            <div key={section.label}>
              <h2 className="text-[20px] leading-6 font-bold text-[#ffffff] whitespace-pre">
                {section.label}
              </h2>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      className="text-[16px] text-[#ffffff] hover:text-[#f9d8cb]"
                      to="#"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
